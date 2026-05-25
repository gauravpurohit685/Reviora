const mongoose = require("mongoose");

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://gauravpurohit685_db_user:j77Ylcp9pwHp3jAW@revioracluster.0dqz7yz.mongodb.net/reviora");
}

module.exports = connectDB;