import * as Redis from 'redis';
import * as config from 'config';
import logger from '../core/logger';
const RedisRetryStategy: object ={
    retry_stratgy: function(options: {[key: string]: any}){
        logger.i('fds');
        let total_retry_time = config.get('total_retry_time'),
        redisMaxReconnectCount = config.get('redisMaxReconnectCount');
        if (options.total_retry_time > config.get('total_retry_time')){
            logger.i(`redis连接错误，重试时间超过${total_retry_time})`);
            throw new Error('ssss');
        }
        if(options.attempt > config.get('redisMaxReconnectCount')){
            logger.i(`redis连接错误，重试次数超过${redisMaxReconnectCount}`);
            throw new Error('sfggg');
        }
    }
}
const client = Redis.createClient(Object.assign({}, config.get('redis'), RedisRetryStategy));

client.on('warning', function(err){
    logger.i('dsfsdf')
});
client.on('error', function(err){
    logger.i('reerre');
});

export default client;
