import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import models from '../models/index';
import logger from "../core/logger";
// TODO 字段过滤
const commentModel = models.commentModel;
@Controller()
export class CommentController {

    @Get("/comment")
    async  getAll() {
        let result = {};
        try {
            result = await commentModel.find({}, (err: Error, res: any) => {
                if (err !== null) {
                    throw (err);
                }
            }).lean();
        } catch (err) {
            console.log(err);
            return '查询出错了';
        }
        logger.i(JSON.stringify({
            "name": "gds-err",
            "hostname": "localhost",
            "pid": 11,
            "level": 10,
            "tagList": [
                "fef",
                "fasd"
            ],
            "msg": "unknow Error",
            "time": "20180603",
            "v": 333
        }));
        return result;
    }

    @Get("/comment/:keyword")
    async getOne(@Param("keyword") NAME: string) {
        let result = {};
        try {
            result = await commentModel.find({ name: NAME }, (err: Error, res: any) => {
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

    @Post("/comment")
    async post(@Body() comment: any) {
      let result = {};
      try {
        result = await commentModel.insertMany(comment, (err: Error, res: any) => {
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

    // @Put("/log/:name")
    // async put(@Param("name") name: string, @Body() log: any) {
    //   let result = {};
    //   try {
    //     result = await commentModel.updateOne({ name: name }, log, (err: Error, row: any) => {
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
    //     result = await commentModel.deleteOne({ name: NAME }, (err: Error) => {
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