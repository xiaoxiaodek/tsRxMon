import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import logModel from '../model/log';
import { throws } from "assert";

@Controller()
export class LogController {

  @Get("/log")
 async  getAll() {
   let result = {};
   try {
     result = await logModel.find({}, (err, res) => {
       if(err !== null){
         throw(err);
       }
     });
   } catch (err) {
     console.log(err);
     return '查询出错了';
   }
    return   result;
  }

  @Get("/log/:name")
  async getOne(@Param("name") NAME: String) {
    let result = {};
    try {
      result = await logModel.find({ name: NAME }, (err, res) => {
        if (err !== null) {
          throw (err);
        }
      })
    } catch (err) {
      console.log(err);
      return '查询出错!';
    } 
    return result;
  }
 
  @Post("/log")
  async post(@Body() log: any) {
    let result = {};
    try {
      result = await logModel.insertMany(log, (err, res) => {
        if (err !== null) {
          throw (err);
        }
      })
    } catch (err) {
      console.log(err);
      return '查询出错!';
    } 
    return "Saving log...";
  }

  @Put("/log/:name")
  async put(@Param("name") name: string, @Body() log: any) {
    let result = {};
    try {
      result = await logModel.updateOne({ name: name }, log, (err, row) => {
        if (err !== null) {
          throw (err);
        }
      })
    } catch (err) {
      console.log(err);
      return '查询出错!';
    } 
    return "Updating a log...";
  }

  @Delete("/log/:name")
  async remove(@Param("name") NAME: string) {
    let result = {};
    try {
      result = await logModel.deleteOne({ name: NAME }, (err) => {
        if (err !== null) {
          throw (err);
        }
      })
    } catch (err) {
      console.log(err);
      return '查询出错!';
    } 
    return "Removing log...";
  }

}