import "reflect-metadata";
import { container } from 'tsyringe';
import { AppService } from './app.svc';
import { AppInfoDTO } from '../types';

describe('app.service', () => {
  it('should work', () => {
    const svc = container.resolve(AppService);
    const result = svc.getAppInfo();

    const expectResult = new AppInfoDTO();
    // expectResult.environment = (process.env['NODE_ENV'] as string) ?? 'local';
    // expectResult.uuid = svc.uuid;
    expectResult.environment = '';
    expectResult.uuid = '';
    expect(result).toEqual(expectResult);
  });
});
