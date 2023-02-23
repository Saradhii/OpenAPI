import Router from "express";
import { getCountries, getPorts, getPortsDetails } from "../controllers/Port.controller.js";
const PortsRoute = Router();

PortsRoute.get("/ports/countries", getCountries);
PortsRoute.get("/ports/:countryName", getPorts);
PortsRoute.get("/ports/:countryName/:portName", getPortsDetails);


export default PortsRoute;