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
    return "This action returns logs " + result;
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
    return "This action returns log #" + result;
  }
 
  @Post("/log")
  async post(@Body() log: any) {
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
    return "Saving log...";
  }

  @Put("/log/:id")
  put(@Param("id") id: number, @Body() log: any) {
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
    return "Updating a log...";
  }

  @Delete("/log/:id")
  remove(@Param("id") id: number) {
    return "Removing log...";
  }

}