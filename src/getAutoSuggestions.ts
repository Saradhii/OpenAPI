import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { AutoSuggestionsSchema, errorSchema } from "./common.js";
import SearchEngine from "./ElasticQuerys/SearchEngine.js";

const getAutoSuggestions =  async (_request: Request, response: Response) => {
    let str :string = `${_request.query.q}`;
    str = str.trim();
    str = str.replace(/\s+/g, " ");
    str = str.replace(/[^a-zA-Z0-9 ]/g, "");
    const resuls = await SearchEngine(_request.params.index, str);
    response.status(200).send(resuls);
}


export function initGetgetAutoSuggestions(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/searchhs/:index", getAutoSuggestions);
  
    // declare openAPI schema
    openApi.addPath(
        "/searchhs/:index",
      {
        get: {
          summary: "Get auto suggestions of searching term",
          description: "This operation retrieves auto suggestions of searching term",
          operationId: "get-search-op",
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
                    description: "sub heading number",
                    required: true, // param values MUST be required
                    example: "apple",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", AutoSuggestionsSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

