import { TDataType } from "../types";
import { OpenAPI } from 'routing-controllers-openapi';

export const ApiResSchema = <TModel extends TDataType<any>>(
  model: TModel,
  option?: 
    { isArray?: boolean, status?: number, description?: string, contentType?: string, },
) => {
  const properties = option?.isArray
    ? {
        total: {
          type: 'number',
        },
        data: {
          type: 'array',
          items: { $ref: `#/components/schemas/${model.name}` },
        },
      }
    : {
        data: {
          $ref: `#/components/schemas/${model.name}`,
        },
      };
  const statuscode = option?.status ?? 200;
  const contentType = option?.contentType ?? 'application/json';

  return OpenAPI({
    description: option?.description,
    responses: {
      [`${statuscode}`]: {
        content: {
          [`${contentType}`]: {
            schema: {
              allOf: [
                {
                  $ref: `#/components/schemas/ApiResDTO`,
                },
                {
                  properties: {
                    result: {
                      type: 'object',
                      properties,
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  });
};