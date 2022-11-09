module.exports = {
    userFormatError: {
        code: "10001",
        message: "user_name and password can not be null"
    },
    userExistAlready: {
        code: "10002",
        message: "There has been a same user in database already"
    },
    userRegisterError:{
        code:"10003",
        message: "Some errors happended during register"
    },
    userNotExisted:{
        code:"10004",
        message:"The user doesn't exist"
    },
    userLoginError:{
        code: "10005",
        message:"The process of login failed"
    },
    invalidPassword:{
        code:"10006",
        message:"The password that user input is not equal the password in database"
    }
}