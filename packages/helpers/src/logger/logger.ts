import {
  Logger,
  LoggerOptions,
  createLogger,
  format,
  transports,
} from 'winston';
import 'winston-daily-rotate-file';

const colorizer = format.colorize();
const logPrintf = format.printf(({ level, message, timestamp, label }) => {
  const padding = level.length <= 7 ? 7 : 17; // padding differently if it has colour.
  return `${timestamp} ${label} ${level.padEnd(padding, '')} ${message}`;
});

export const consoleFormat = (
  label: string = '',
  subject: string = '[LOGGER]'
) =>
  format.combine(
    format.label({ label, message: label.length > 0 }),
    format.timestamp(),
    format.printf(({ level, message, timestamp, label }) => {
      const padding = level.length <= 7 ? 7 : 17; // padding differently if it has colour.
      const subjectFormat = colorizer.colorize(level, `${subject}`);
      const colorFormat = colorizer.colorize(
        level,
        `${level.padEnd(padding, '')} ${message}`
      );
      const timestampFormat = colorizer.colorize(level, `${timestamp}`);
      return `${subjectFormat} ${timestampFormat} ${colorFormat}`;
    })
  );
export const fileFormat = (label: string = '', subject: string = '[LOGGER]') =>
  format.combine(
    format.label({ label, message: label.length > 0 }),
    format.timestamp(),
    format.printf(({ level, message, timestamp, label }) => {
      const padding = level.length <= 7 ? 7 : 17; // padding differently if it has colour.
      return `${subject} ${timestamp} ${level.padEnd(padding, '')} ${message}`;
    })
  );

interface LoggerFileOptions {
  label?: string;
  subject?: string;
  dirname?: string;
  error?: string;
  info?: string;
  dailyFilename?: string;
  logKeepDays?: string;
}

export class WinstonHelper {
  private fileOptions?: LoggerFileOptions;
  logger: Logger;

  constructor(fileOptions?: LoggerFileOptions, options?: LoggerOptions) {
    const newOptions = this.genOptions(fileOptions, options);
    this.logger = createLogger(newOptions);
  }

  private defaultFileOpts: LoggerFileOptions = {
    subject: '[LOGGER]',
    dirname: 'logs',
    error: 'error.log',
    info: 'system.log',
    logKeepDays: '120d',
    dailyFilename: 'system-%DATE%.log',
  };

  private genOptions(
    fileOptions?: LoggerFileOptions,
    options?: LoggerOptions
  ): LoggerOptions {
    this.fileOptions = {
      ...this.defaultFileOpts,
      ...fileOptions,
    };
    const defaultOptions: LoggerOptions = {
      transports: [
        new transports.DailyRotateFile({
          dirname: this.fileOptions.dirname,
          filename: this.fileOptions.dailyFilename,
          zippedArchive: true,
          maxFiles: this.defaultFileOpts.logKeepDays, // 保留幾天
          format: fileFormat(this.fileOptions.label, this.fileOptions.subject),
        }),
      ],
    };

    return {
      level: options?.level ?? 'info',
      transports: [
        new transports.Console({
          format: consoleFormat(
            this.fileOptions.label,
            this.fileOptions.subject
          ),
        }),
        new transports.File({
          filename: this.fileOptions.error,
          dirname: this.fileOptions.dirname,
          level: 'error',
          format: fileFormat(this.fileOptions.label, this.fileOptions.subject),
        }),
        ...((options?.transports as any[]) ??
          (defaultOptions.transports as any[])),
      ],
      format: options?.format ?? defaultOptions.format,
    };
  }
}

export class WinstonSingleton {
  private static instance: WinstonSingleton;
  private static options?: LoggerOptions;
  private static fileOptions?: LoggerFileOptions;
  private static winstonLogger: Logger;

  private constructor(
    fileOptions?: LoggerFileOptions,
    options?: LoggerOptions
  ) {
    const defaultFileOpts: LoggerFileOptions = {
      dirname: '',
      error: 'error.log',
      info: 'system.log',
    };
    WinstonSingleton.fileOptions = {
      ...defaultFileOpts,
      ...fileOptions,
    };
    if (!options) {
      options = {
        transports: [
          new transports.Console({
            format: consoleFormat(),
          }),
          new transports.File({
            filename: WinstonSingleton.fileOptions.error,
            dirname: WinstonSingleton.fileOptions.dirname,
            level: 'error',
            format: fileFormat(),
          }),
          new transports.File({
            filename: WinstonSingleton.fileOptions.info,
            dirname: WinstonSingleton.fileOptions.dirname,
            level: 'info',
            format: fileFormat(),
          }),
        ],
      };
    } else {
      WinstonSingleton.options = options;
    }
    WinstonSingleton.winstonLogger = createLogger(options);
  }

  static get logger(): Logger {
    if (WinstonSingleton.instance) {
      return WinstonSingleton.winstonLogger;
    } else {
      WinstonSingleton.instance = new WinstonSingleton(
        WinstonSingleton.fileOptions,
        WinstonSingleton.options
      );
      return WinstonSingleton.winstonLogger;
    }
  }

  static initialize(fileOptions: LoggerFileOptions, options?: LoggerOptions) {
    if (!WinstonSingleton.instance) {
      WinstonSingleton.instance = new WinstonSingleton(fileOptions, options);
    }
    return WinstonSingleton.instance;
  }
}
