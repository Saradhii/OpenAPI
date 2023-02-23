import {Request,Response} from "express";
import { portModel } from "../models/Port.model.js";
import { CountryModel } from "../models/Country.model.js";
import sortBy from "lodash.sortby";

const getCountries = async function (req : Request, res:Response) {
    try {
      let countries = await CountryModel.find().lean();
      if (countries) {
        countries= sortBy(countries,[function(o) { return o.countryCode; }])
        return res.status(200).send(countries);
      } else {
        res.status(404).send({ status: false, msg: "country list not found" });
      }
    } catch (err :any) {
      res.status(500).send({ status: false, message: err.message });
    }
};

const getPorts = async function (req : Request, res:Response) {
    try {
      let country = req.params.countryName;
      let ports = await portModel
        .find({ countryCode: country })
        .select({ mainPortName: 1, latitude: 1, longitude: 1, _id: 0 });
  
      if (ports) {
        ports= sortBy(ports,[function(o) { return o.mainPortName; }])
        return res.status(200).send(ports);
      } else {
        res.status(404).send({ status: false, msg: "port list not found" });
      }
    } catch (err:any) {
      res.status(500).send({ status: false, message: err.message });
    }
};
  
const getPortsDetails = async function (req : Request, res:Response) {
    try {
      let port = req.params.portName;
      let data = await portModel.find({ mainPortName: port });
  
      if (data) {
        return res.status(200).send(data);
      } else {
        res.status(404).send({ status: false, msg: "port details is not found" });
      }
    } catch (err:any) {
      res.status(500).send({ status: false, message: err.message });
    }
};

export {getCountries, getPorts, getPortsDetails}