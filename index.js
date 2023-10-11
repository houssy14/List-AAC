const express = require("express");
const app = express();
const productrouter = require("./routers/productrouters")
require("./config/database").connect()
app.use(express.json())
app.use(productrouter)

app.listen(8000,()=>{console.log("listening to port 8000")})