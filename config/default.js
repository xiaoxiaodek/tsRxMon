module.exports = {
    serverPort: 37571,
    mongodb: {
      // url: 'mongodb://127.0.0.1:27017/logs',
      url: 'mongodb://172.17.0.1:27017/logs',
      options: {

        poolSize: 20,
        connectTimeoutMS: 10000,
        autoReconnect:20000,
        keepAlive:1
      }
    }
}