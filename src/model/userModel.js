const { DataTypes } = require('sequelize');

const sequelize = require("../db/sequelize")        //导入数据库连接对象


//创建模型  (Model zd_user -> zd_users)     zd_user表示数据表的名称 但是创建完成之后，在MySQL中表名会改成zd_users
const User = sequelize.define('zd_user', {
    // id 会被sequelize自动创建， 不用自己写
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    password:{
        type: DataTypes.CHAR(64),
        allowNull: false
    },
    is_admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

//创建数据表
// User.sync({ force: true });         //在MySQL中创建User表   强制同步，force表示如果已经存在，那么就重新创建

module.exports = User
