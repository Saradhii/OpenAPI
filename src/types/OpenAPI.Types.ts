import {Types} from "ts-openapi";

export const errorSchema = Types.Object({
    description: "Error Object",
    properties: {
      code: Types.Integer({ description: "Error Code" }),
      errorId: Types.Uuid({ description: "Support Unique Error ID" }),
      errorDetails: Types.Array({
        arrayType: Types.String(),
        description: "Error List",
      }),
    },
    example: {
      code: "121",
      errorId: "3520c143-983b-42a4-8c08-0f3e0bbdfb29",
      errorDetails: ["Name is mandatory.", "Unknown error"],
    },
    modelName: "ErrorResponse",
});