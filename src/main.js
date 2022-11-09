const {APP_PORT} = require("./config/config.default")

const app = require("./app/app")

app.listen(APP_PORT, ()=>{
    console.log("the server is running at " + APP_PORT)
})