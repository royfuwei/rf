import { IsBoolean, IsNumber, IsObject, IsOptional } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export class ApiResultDTO<TData> {
  @JSONSchema({
    description: '資料筆數',
  })
  @IsNumber()
  @IsOptional()
  total?: number;

  @JSONSchema({
    description: '回傳資料',
  })
  @IsObject()
  data: TData[] | TData;
}

export class ApiResDTO<TData> {
  @JSONSchema({ description: '請求結果' })
  @IsBoolean()
  success: boolean;

  @JSONSchema({ description: '請求狀態' })
  @IsNumber()
  status: number;

  @JSONSchema({
    properties: {
      total: {
        description: '資料筆數',
        type: 'integer',
      },
      data: {
        description: '回傳資料',
        type: ['array', 'object']
      }
    }
  })
  @IsOptional()
  result?: ApiResultDTO<TData>;
}
