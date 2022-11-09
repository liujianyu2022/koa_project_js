const UserRouter = require("koa-router")

const { register, login } = require("../controller/userController")

const { userValidator, verifyUser, cryptPassword } = require("../middleware/userMiddleware")

let userRouter = new UserRouter({ prefix: "/users" })      //创建路由对象

userRouter.post("/register", userValidator, verifyUser, cryptPassword, register)      //注册接口   先检查输入的格式 -> 验证用户是否存在 -> 密码加密 -> 注册
userRouter.post("/kogin", login)            //登录接口

// userRouter.get("/", (ctx, next)=>{       以前的写法
//     ctx.response.body = "user"
// })

module.exports = userRouter