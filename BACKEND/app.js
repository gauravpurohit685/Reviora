// important requires
const connectDB = require("./src/config/database");
const express = require("express");


const app = express();









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



// mongodb+srv://gauravpurohit685_db_user:j77Ylcp9pwHp3jAW@revioracluster.0dqz7yz.mongodb.net/
