import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
// import logModel from '../model/log';
import models from '../models/models';
import { throws } from "assert";
import logger from "../core/logger";

const logModel = models.logModel;
@Controller()
export class LogController {

  @Get("/log")
 async  getAll() {
   let result = {};
   try {
     result = await logModel.find({}, (err: Error, res : any) => {
       if(err !== null){
         throw(err);
       }
     }).lean();
   } catch (err) {
     console.log(err);
     return '查询出错了';
   }
   logger.i('asd');
    return   result;
  }

  @Get("/log/:keyword")
  async getOne(@Param("keyword") NAME: String) {
    let result = {};
    try {
      result = await logModel.find({ name: NAME }, (err: Error, res: any) => {
        if (err !== null) {
          throw (err);
        }
      }).lean()
    } catch (err) {
      console.log(err);
      return '查询出错!';
    } 
    return result;
  }
 
  // @Post("/log")
  // async post(@Body() log: any) {
  //   let result = {};
  //   try {
  //     result = await logModel.insertMany(log, (err: Error, res: any) => {
  //       if (err !== null) {
  //         throw (err);
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err);
  //     return '查询出错!';
  //   } 
  //   return "Saving log...";
  // }

  // @Put("/log/:name")
  // async put(@Param("name") name: string, @Body() log: any) {
  //   let result = {};
  //   try {
  //     result = await logModel.updateOne({ name: name }, log, (err: Error, row: any) => {
  //       if (err !== null) {
  //         throw (err);
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err);
  //     return '查询出错!';
  //   } 
  //   return "Updating a log...";
  // }

  // @Delete("/log/:name")
  // async remove(@Param("name") NAME: string) {
  //   let result = {};
  //   try {
  //     result = await logModel.deleteOne({ name: NAME }, (err: Error) => {
  //       if (err !== null) {
  //         throw (err);
  //       }
  //     })
  //   } catch (err) {
  //     console.log(err);
  //     return '查询出错!';
  //   } 
  //   return "Removing log...";
  // }

}