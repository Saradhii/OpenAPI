import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { IndianHeadingsSchema, errorSchema } from "./common.js";
import IndianHeadings from "./ElasticQuerys/IndianHeadings.js";

const getHeadingsIndia =  async (_request: Request, response: Response) => {
    const headings_india = await IndianHeadings(_request.params.index,`${_request.query.q}`);
    response.status(200).send(headings_india);
}


export function initGetHeadingsIndia(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/getheadingsindia/:index", getHeadingsIndia);
  
    // declare openAPI schema
    openApi.addPath(
        "/getheadingsindia/:index",
      {
        get: {
          summary: "Get headings or hs4 data from indianhs",
          description: "This operation retrieves headings or hs4 data from indianhs",
          operationId: "get-headingsIndia-op",
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
                    description: "chapter no",
                    required: true, // param values MUST be required
                    example: "01",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", IndianHeadingsSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

