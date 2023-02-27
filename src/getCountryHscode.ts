import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { GlobalSchema, errorSchema } from "./common.js";
import SearchGlobalHs from "./ElasticQuerys/SearchGlobalHs.js";
import SearchInCountryHscode from "./ElasticQuerys/SearchInCountryHscode.js";

const getCountryhscode =  async (_request: Request, response: Response) => {
    let n :number = parseInt(`${_request.query.n}`);
    const data :any = await SearchInCountryHscode(_request.params.index,`${_request.query.q}`,n);
    const arr = data?.hits?.hits;
    for(let i=0;i<arr.length;i++)
    {
      if(_request.params.index=="indianhs")
      {
        let globalData= await SearchGlobalHs("globalhs", arr[i]._source.itc_hscode,0);
        arr[i].globalData = globalData?.hits?.hits[0];
      }
      else if (_request.params.index=="htshs")
      {
        var txt = arr[i]._source.htsno;
        txt = txt.replace('.','');
        txt = txt.replace('.','');
        txt = txt.replace('.','');
        let globalData= await SearchGlobalHs("globalhs", txt,0);
        arr[i].globalData = globalData?.hits?.hits[0];
      }
    }
    response.send(arr);
}


export function initGetCountryHscode(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/searchcountryhscode/:index", getCountryhscode);
  
    // declare openAPI schema
    openApi.addPath(
        "/searchcountryhscode/:index",
      {
        get: {
          summary: "Get country specific data for searching term",
          description: "This operation retrieves country specific data for searching term",
          operationId: "get-countrydata-op",
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
                    example: "sugar",
                  }),
                  n: Types.Number({
                    description: "from number",
                    required: true, // param values MUST be required
                    example: 0,
                  })
            },
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", GlobalSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

