import { Application, Request, Response } from "express";
import { OpenApi, Types } from "ts-openapi";
import { globalheadingsSchema, errorSchema } from "./common.js";
import GlobalHeadings from "./ElasticQuerys/GlobalHeadings.js";
import {headings_global_type} from "./types/HsCode.Types.js";

const getHeadings =  async (_request: Request, response: Response) => {
    const headings_global : any = await GlobalHeadings(_request.params.index,`${_request.query.q}`);
    let new_data : Array<headings_global_type>= headings_global?.hits?.hits;
    let newArray : Array<headings_global_type> = [];
    let uniqueObject: {[key: string]: any} = {};
    let i:string;
    for ( i in new_data) 
    {let objTitle :string = new_data[i]._source.heading_no;
     uniqueObject[objTitle] = new_data[i];}
    for (i in uniqueObject) 
    {newArray.push(uniqueObject[i]);}
    response.status(200).send(newArray);
}


export function initGetHeadings(app: Application, openApi: OpenApi) {
    // declare route to express
    app.get("/getheadings/:index", getHeadings);
  
    // declare openAPI schema
    openApi.addPath(
        "/getheadings/:index",
      {
        get: {
          summary: "Get headings or hs4 data from globalhs",
          description: "This operation retrieves headings or hs4 data from globalhs",
          operationId: "get-headings-op",
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
                    description: "chapter no",
                    required: true, // param values MUST be required
                    example: "01",
                  })
            }
          },
          tags: ["hscode page"],
          responses: {
            200: openApi.declareSchema("Successful Operation", globalheadingsSchema),
            400: openApi.declareSchema("Bad Request", errorSchema),
          },
        },
      },
      true
    );
}

