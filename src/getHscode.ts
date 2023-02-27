import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { hscodeSchema, errorSchema } from "./common.js";
import SubHeadingsByCountry from "./ElasticQuerys/SubHeadingsByCountry.js";

const getHscode =  async (_request: Request, response: Response) => {
    const hscode = await SubHeadingsByCountry(_request.params.index,`${_request.query.q}`);
    response.status(200).send(hscode);
}


export function initGetHscode(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/gethscode/:index", getHscode);
  
    // declare openAPI schema
    openApi.addPath(
        "/gethscode/:index",
      {
        get: {
          summary: "Get hscode from globalhs",
          description: "This operation retrieves subheadings or hs6 data from globalhs",
          operationId: "get-hscode-op",
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
                    example: "010110",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", hscodeSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

