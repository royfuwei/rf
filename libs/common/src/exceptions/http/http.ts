import { HttpError } from 'http-errors';
import { EnumErrorCode } from '../../enums';

export class BaseHttpException extends HttpError {
  errorCode: EnumErrorCode = EnumErrorCode.HTTP_BASE_ERROR;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.statusCode = status;
  }
}
