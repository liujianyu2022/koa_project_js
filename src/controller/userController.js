
let { createUser, getUserInfo, userRegisterError } = require("../service/userService")

class UserController {
    async register(ctx, next) {

        //1. 获取数据 并进行合理性检查
        let { user_name, password } = ctx.request.body

        //下面的合理性验证交给了middleware处理
        // let  {user_name, password} = ctx.request.body
        // if(!user_name || !password){
        //     ctx.response.status = 400           //bad request
        //     ctx.response.body = {
        //         code: "10001",
        //         message: "user_name and password can not be null"
        //     }
        //     return
        // }
        // if( await getUserInfo({user_name})){        //注意： getUserInfo返回的是一个Promise对象。需要使用await获取
        //     ctx.status = 409        //conflict    冲突
        //     ctx.response.body = {
        //         code: "10002",
        //         message: "There has been a same user in database already"
        //     }
        //     return
        // }


        //2. 操作数据库

        try {
            let res = await createUser(user_name, password)

            console.log("res--", res)       //6

            //3. 返回结果
            ctx.response.body = {
                code: 0,
                message: "register successfully!",
                result: {
                    id: res.id,
                    user_name: res.user_name
                }
            }
        }catch(error){
            ctx.app.emit("error", userRegisterError, ctx)
        }
        
    }

    async login(ctx, next) {
        
        let {user_name, password} = ctx.request.body
 
        ctx.response.body = "login successfully"
    }

}

let userController = new UserController()

module.exports = userController