const User = require("../model/userModel")


//真正进行数据库的操作
class UserService{
    async createUser(user_name, password){          //创建用户
        //插入数据
        let res = await User.create({user_name, password})
        return res.dataValues           //res.dataValues就是数据库中的一行
    }

    async getUserInfo({id, user_name, password, is_admin}){
        let whereOption = {}

        id && Object.assign(whereOption, {id})
        user_name && Object.assign(whereOption, {user_name})
        password && Object.assign(whereOption, {password})
        is_admin && Object.assign(whereOption, {is_admin})

        
        let res = await User.findOne({      //没有找到的话，返回结果是null
            attributes: ["id", "user_name", "password", "is_admin"],
            where: whereOption
        })

        console.log("getUserInfo--", res)

        if(res){
            console.log("here")
            return res.dataValues
        }else {
            console.log("there")
            return null
        }
    }
}

module.exports = new UserService()