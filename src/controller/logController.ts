import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import logModel from '../model/log';

@Controller()
export class logController {

  @Get("/log")
  getAll() {
   let a = logModel.findOne({name: "wss"}, (err, res)=>{
     console.log(res);
   });
    console.log(a);
    
    return "This action returns all logs :" + a;
  }

  @Get("/log/:id")
  getOne(@Param("id") id: number) {
    return "This action returns log #" + id;
  }

  @Post("/log")
  post(@Body() log: any) {
    return "Saving log...";
  }

  @Put("/log/:id")
  put(@Param("id") id: number, @Body() log: any) {
    return "Updating a log...";
  }

  @Delete("/log/:id")
  remove(@Param("id") id: number) {
    return "Removing log...";
  }

}