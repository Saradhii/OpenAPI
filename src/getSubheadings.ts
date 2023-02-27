import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { subheadingsSchema, errorSchema } from "./common.js";
import GlobalSubHeadings from "./ElasticQuerys/GlobalSubHeadings.js";

const getSubheadings =  async (_request: Request, response: Response) => {
    const sub_headings_global = await GlobalSubHeadings(_request.params.index,`${_request.query.q}`);
    response.status(200).send(sub_headings_global);
}


export function initGetSubheadings(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/getsubheadings/:index", getSubheadings);
  
    // declare openAPI schema
    openApi.addPath(
        "/getsubheadings/:index",
      {
        get: {
          summary: "Get subheadings or hs6 data from globalhs",
          description: "This operation retrieves subheadings or hs6 data from globalhs",
          operationId: "get-subHeadings-op",
          requestSchema: {
            params: {
                index: Types.String({
                description: "index",
                required: true, // param values MUST be required
                example: "globalhs",
              })
            },
            query:{
                  q: Types.String({
                    description: "heading no",
                    required: true, // param values MUST be required
                    example: "0101",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", subheadingsSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

