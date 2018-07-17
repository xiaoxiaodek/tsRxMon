import {
    Controller,
    Param,
    Body,
    Get,
    Post,
    Put,
    Delete
} from "routing-controllers";
import models from '../models/index';
import logger from "../core/logger";

const userModel = models.userModel;
@Controller()
export class UserController {

    @Get("/user")
    async getAll() {
        let result = {};
        try {
            result = await userModel.find({}, (err: Error, res: any) => {
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

    @Get("/user/:keyword")
    async getOne(@Param("keyword") NAME: string) {
        let result = {};
        try {
            result = await userModel.find({
                name: NAME
            }, (err: Error, res: any) => {
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
}