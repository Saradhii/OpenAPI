import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { countSchema, errorSchema } from "./common.js";
import SearchCount from "./ElasticQuerys/SearchCount.js";

const getCount =  async (_request: Request, response: Response) => {
    const count = await SearchCount(_request.params.index,`${_request.query.q}`);
    response.status(200).send(count);
}


export function initGetCount(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/searchglobalres/:index", getCount);
  
    // declare openAPI schema
    openApi.addPath(
        "/searchglobalres/:index",
      {
        get: {
          summary: "Get count of searching term",
          description: "This operation retrieves Get count of searching term",
          operationId: "get-count-op",
          requestSchema: {
            params: {
                index: Types.String({
                description: "index",
                required: true, // param values MUST be required
                example: "indianhs",
              })
            },
            query:{
                  q: Types.String({
                    description: "sub heading number",
                    required: true, // param values MUST be required
                    example: "apple",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", countSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

