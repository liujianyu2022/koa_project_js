const { Sequelize } = require('sequelize');
const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST} = require("../config/config.default")

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect:'mysql'
  });

  sequelize.authenticate().then(
    ()=>{
        console.log("数据库连接成功")
    },
    (error)=>{
        console.log("数据库连接失败", error.message)
    }
  )

  module.exports = sequelize        //导出数据库连接对象