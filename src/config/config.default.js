const path = require("path")
const dotenv = require("dotenv")

dotenv.config({path: path.resolve(__dirname, "../../.env")})     //加载.env的文件，这样在process.env中即可拿到.env文件中的配置   这种写法可以在src目录下启动，也可以在根目录下启动

// dotenv.config()         //这种写法，需要在根目录下启动 也就是在koa2_project_js目录下启动

// console.log(process.env)

module.exports = process.env