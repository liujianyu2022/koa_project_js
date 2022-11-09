const Koa = require("koa")
const {koaBody} = require("koa-body")
const userRouter = require("../router/userRouter")

const app = new Koa()
app.use(koaBody())          //解析body的参数

app.use(userRouter.routes())


// 统一的错误处理
app.on("error", (error, ctx)=>{     //error对象是自己定义的， {code:xxx, message:""}
    let {code, message} = error
    let status = 500            //默认表示服务器错误

    if(code == "10001"){
        status = 400
    } else if(code == "10002"){
        status = 409   //conflict
    } 

    ctx.response.status = status
    ctx.response.body = message
})

module.exports = app