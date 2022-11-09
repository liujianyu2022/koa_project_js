const bcrypt = require("bcryptjs")
const { getUserInfo } = require("../service/userService")
const { userFormatError, userExistAlready, userRegisterError } = require("../constant/errorType")
async function userValidator(ctx, next) {       //验证格式
    let { user_name, password } = ctx.request.body

    if (!user_name || !password) {
        ctx.response.status = 400           //bad request

        // ctx.response.body = {       //采用统一的错误处理格式
        //     code: "10001",
        //     message: "user_name and password can not be null"
        // }

        ctx.app.emit("error", userFormatError, ctx)     //第二个参数的错误对象  在app.js统一处理

        return
    }

    await next()
}


async function verifyUser(ctx, next) {       //判断用户是否存在
    let { user_name } = ctx.request.body

    if (await getUserInfo({ user_name })) {        //注意： getUserInfo返回的是一个Promise对象。需要使用await获取
        ctx.status = 409        //conflict    冲突

        // ctx.response.body = {
        //     code: "10002",
        //     message: "There has been a same user in database already"
        // }

        ctx.app.emit("error", userExistAlready, ctx)

        return
    }


    //也可以使用下面的写法
    // try{
    //     let res = await getUserInfo({user_name})
    //     if(res){        //说明用户已经存在
    //         ctx.app.emit("error", userExistAlready, ctx)
    //         return
    //     }
    // }catch(error){
    //     ctx.app.emit("error", userRegisterError, ctx)       // 只是触发error事件， 后面还是会执行的。因此要加上return
    //     return 
    // }

    await next()
}

async function cryptPassword(ctx, next) {
    let { password } = ctx.request.body
    var salt = bcrypt.genSaltSync(10);      //加盐
    var hash = bcrypt.hashSync(password, salt);     //hash保存的就是密文
    ctx.request.body.password = hash        //密文覆盖明文

    await next()
}

module.exports = {
    userValidator,
    verifyUser,
    cryptPassword
}

