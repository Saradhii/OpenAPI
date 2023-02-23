import Router from "express";
import { CounterModel } from "../models/Counter.model.js";
import { RequestQuoteModel } from "../models/RequestQuote.model.js";
const RequestQuoteRoute = Router();


RequestQuoteRoute.post("/create",async(req,res)=>{
    var {
    product_details,
    delivery_mode,
    transportation_by,
    weight,
    volume,
    by_units,
    dimensions,
    container_type,
    containers_quantity,
    location_from,
    location_to,
    ready_to_load,
    additional_information,
    associated_services,
    first_name,
    last_name,
    phone,
    email,
    ship_type,
    discharging_rate,
    loading_rate,
    gross_weight,
    incoterms,
    } = req.body;
    CounterModel.findOneAndUpdate(
      {id:"autovalue"},
      {"$inc":{"sequence_value":1}},
      {new:true},(err,cd)=>{
        let autoid;
        if(cd==null)
        {
          const data=new CounterModel({
            id:"autovalue",sequence_value:1
          })
          data.save();
          autoid=1;
        }
        else
        {
          autoid=cd.sequence_value;
        }
        console.log(autoid);

        if (transportation_by == "FCL" || transportation_by == "ULDC") {
          var newrq = new RequestQuoteModel({
            id:autoid,
            product_details,
            delivery_mode,
            transportation_by,
            container_type,
            containers_quantity,
            location_from,
            location_to,
            ready_to_load,
            additional_information,
            associated_services,
            first_name,
            last_name,
            phone,
            email,
            incoterms,
          });
      
          newrq.save((err, req) => {
            if (err) {
              return res.status(404).send({ status: 404, message: err.message });
            } else {
              return res
                .status(200)
                .send({ status: 200, message: "Request Quote created successfully" });
            }
          });
        } else if (transportation_by == "LCL" || transportation_by == "SC") {
          if (by_units) {
            var newrq = new RequestQuoteModel({
              id:autoid,
              product_details,
              delivery_mode,
              transportation_by,
              by_units,
              dimensions,
              location_from,
              location_to,
              ready_to_load,
              additional_information,
              associated_services,
              first_name,
              last_name,
              phone,
              email,
              incoterms,
            });
      
            newrq.save((err, req) => {
              if (err) {
                return res.status(404).send({ status: 404, message: err.message });
              } else {
                return res.status(200).send({
                  status: 200,
                  message: "Request Quote created successfully By Units",
                });
              }
            });
          } else {
            var newrq = new RequestQuoteModel({
              id:autoid,
              product_details,
              delivery_mode,
              transportation_by,
              weight,
              volume,
              location_from,
              location_to,
              ready_to_load,
              additional_information,
              associated_services,
              first_name,
              last_name,
              phone,
              email,
              incoterms,
            });
      
            newrq.save((err, req) => {
              if (err) {
                return res.status(404).send({ status: 404, message: err.message });
              } else {
                return res.status(200).send({
                  status: 200,
                  message: "Request Quote created successfully",
                });
              }
            });
          }
        } else if (transportation_by == "Bulk") {
          var newrq = new RequestQuoteModel({
            id:autoid,
            product_details,
            delivery_mode,
            transportation_by,
            ship_type,
            gross_weight,
            loading_rate,
            discharging_rate,
            location_from,
            location_to,
            ready_to_load,
            additional_information,
            associated_services,
            first_name,
            last_name,
            phone,
            email,
            incoterms,
          });
      
          newrq.save((err, req) => {
            if (err) {
              return res.status(404).send({ status: 404, message: err.message });
            } else {
              return res
                .status(200)
                .send({ status: 200, message: "Request Quote created successfully" });
            }
          });
        }
      }
    );
});

RequestQuoteRoute.get("/fetchByMode/Sea", async (req, res) => {
    const query = req.query.transportation_by;
    if (query) {
      const allrq = await RequestQuoteModel.find({
        delivery_mode: "Sea",
        transportation_by: query,
      });
      if (allrq) {
        return res.status(200).send(allrq);
      } else {
        return res.status(404).send({ Message: "No Data Found" });
      }
      }
      const getDetailsForOne :any = await RequestQuoteModel.find({ delivery_mode: "Sea" });
      if (getDetailsForOne <= 0) {
        return res
          .status(404)
          .send({ message: "Data not found for given criteria , Try Again" });
      } else {
        return res.status(200).send(getDetailsForOne);
      }
});

RequestQuoteRoute.get("/fetchByMode/LCL", async (req, res) => {
    const getDetailsForOne :any = await RequestQuoteModel.find({ transportation_by: "LCL" });
    if (getDetailsForOne <= 0) {
      return res
        .status(404)
        .send({ message: "Data not found for given criteria , Try Again" });
    } else {
      return res.status(200).send(getDetailsForOne);
    }
});

RequestQuoteRoute.get("/fetchByMode/FCL", async (req, res) => {
    const getDetailsForOne :any = await RequestQuoteModel.find({ transportation_by: "FCL" });
    if (getDetailsForOne <= 0) {
      return res
        .status(404)
        .send({ message: "Data not found for given criteria , Try Again" });
    } else {
      return res.status(200).send(getDetailsForOne);
    }
});

RequestQuoteRoute.get("/fetchByMode/air", async (req, res) => {
    const query = req.query.transportation_by;
    if (query) {
      const allrq = await RequestQuoteModel.find({
        delivery_mode: "Air",
        transportation_by: query,
      });
      if (allrq) {
        return res.status(200).send(allrq);
      } else {
        return res.status(404).send({ Message: "No Data Found" });
      }
    }
    const getDetailsForOne :any = await RequestQuoteModel.find({ delivery_mode: "Air" });
    if (getDetailsForOne <= 0) {
      return res.status(404).send({ message: "Data not found !" });
    } else {
      return res.status(200).send(getDetailsForOne);
    }
});

RequestQuoteRoute.get("/fetchAll", async (req, res) => {
    const allrq = await RequestQuoteModel.find();
    if (allrq) {
      return res.status(200).send(allrq);
    } else {
      return res.status(404).send({ Message: "No Data Found" });
    }
});

RequestQuoteRoute.post("/fetchByEmail", async (req, res) => {
    const { email } = req.body;
    const getDetailsForOne = await RequestQuoteModel.find({ email: email });
    if (getDetailsForOne.length == 0) {
      return res
        .status(404)
        .send({ message: "Can't find details for entered email" });
    } else {
      return res.status(200).send(getDetailsForOne);
    }
});

export default RequestQuoteRoute;