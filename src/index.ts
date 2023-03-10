import connection from "./server/DataBaseConnection.js"
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import HSCodeRoute from "./routes/HSCode.route.js";
import RequestQuoteRoute from "./routes/RequestQuote.route.js";
import PortsRoute from "./routes/Ports.route.js";
import {initOpenApi, openApiInstance} from "./openapi.js";
import {initHello} from "./hello.js";
import {initGetSections} from "./getSections.js";
import {initGetCountrys} from "./getCountrys.js"
import {initGetPorts} from "./getPorts.js";
import {initGetPortDetails} from "./getPortDetails.js";
import {initGetHeadingsIndia} from "./getHeadingsIndia.js";
import {initGetSubheadings} from "./getSubheadings.js";
import {initGetHscode} from "./getHscode.js";
import {initGetCount} from './getResultCount.js';
import {initGetgetAutoSuggestions} from './getAutoSuggestions.js';
import {initGetGlobaldata} from './getGlobaldata.js';
import {initGetCountryHscode} from './getCountryHscode.js';
import {initGetHeadings} from './getHeadings.js';

dotenv.config();
const app = express();
app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use("/api",HSCodeRoute);
app.use("/api/requestquote",RequestQuoteRoute);
app.use("/api",PortsRoute);

// declare our hello world api
initHello(app, openApiInstance);
// declare port api's
initGetCountrys(app,openApiInstance);
initGetPorts(app,openApiInstance);
initGetPortDetails(app,openApiInstance);
// declare hscode api's
initGetSections(app,openApiInstance);
initGetHeadingsIndia(app,openApiInstance);
initGetSubheadings(app,openApiInstance);
initGetHscode(app,openApiInstance);
initGetCount(app,openApiInstance);
initGetgetAutoSuggestions(app,openApiInstance);
initGetGlobaldata(app,openApiInstance);
initGetCountryHscode(app,openApiInstance);
initGetHeadings(app,openApiInstance);


// initializes schema endpoint and UI
initOpenApi(app, openApiInstance);

app.get("/api",(req,res)=>{
    res.send("Intoglo backend server is running");
});

const port = process.env.PORT;
app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to Database Successfully &");
      } catch (err) {
        console.log(err);
      }
    console.log(`Intoglo backend server is running`);
})

