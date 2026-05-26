// important requires
const connectDB = require("./src/config/database");
const express = require("express");
var cookieParser = require("cookie-parser")

const app = express();

// using middleware express.json()
app.use(express.json());
app.use(cookieParser());

// database connection
connectDB().then(() => {
    console.log("Database connection established successfully!");
    app.listen(7777, () => {
        console.log("The server is listening successfully!");
    })
})
.catch((err) => {
    console.log("Sorry the following error occured: ",err);
})


