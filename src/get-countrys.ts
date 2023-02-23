// import { Application, Request, Response } from "express";
// import { OpenApi, Types } from "ts-openapi";
// import { getCountries } from "../src/controllers/Port.controller.js";
// import { CountryModel } from "./models/Country.model.js";
 


// export function initGetCountrys(app: Application, openApi: OpenApi) {
//   // declare route to express
//   app.get("/customer/:id", getCountries);

//   // declare openAPI schema
//   openApi.addPath(
//     "/customer/:id",
//     {
//       get: {
//         summary: "Get a customer data",
//         description: "This operation retrieves customer information",
//         operationId: "get-customer-op",
//         requestSchema: {
//           params: {
//             id: Types.Uuid({
//               description: "Customer ID",
//               required: true, // param values MUST be required
//               example: "37237d6a-bb7e-459a-b75d-d1733210ad5c",
//             }),
//           },
//         },
//         tags: ["Customer Operations"],
//         responses: {
//           200: openApi.declareSchema("Successful Operation", CountryModel),
//           400: openApi.declareSchema("Bad Request", errorSchema),
//         },
//       },
//     },
//     true
//   );
// }