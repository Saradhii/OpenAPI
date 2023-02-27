import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { GlobalSchema, errorSchema } from "./common.js";
import SearchGlobalHs from "./ElasticQuerys/SearchGlobalHs.js";
import SearchInCountry from "./ElasticQuerys/SearchInCountry.js"
import {globaldata} from './types/HsCode.Types.js';

const getGlobaldata =  async (_request: Request, response: Response) => {
   let n :number = parseInt(`${_request.query.n}`);
   const data:any = await SearchGlobalHs(_request.params.index, `${_request.query.q}`,n);
   const arr :Array<globaldata> = data?.hits?.hits;
   for (var i = 0; i < arr.length; i++) {
    let indianData :any = await SearchInCountry("indianhs", arr[i]._source.hscode);
    let usaData :any = await SearchInCountry("htshs", arr[i]._source.hscode);
    arr[i].indiaData = indianData?.hits?.hits;
    arr[i].usaData = usaData?.hits?.hits;
  }
  response.status(200).send(arr);
}


export function initGetGlobaldata(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/searchglobal/:index", getGlobaldata);
  
    // declare openAPI schema
    openApi.addPath(
        "/searchglobal/:index",
      {
        get: {
          summary: "Get global data for searching term",
          description: "This operation retrieves auto suggestions of searching term",
          operationId: "get-globalData-op",
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

