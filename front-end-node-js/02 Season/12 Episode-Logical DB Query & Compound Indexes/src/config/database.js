const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect
    (
        "mongodb+srv://mominnaqeem9860_db_user:SDJZ1EOpNmcn4lBf@practice-mongodb.qrcs9yi.mongodb.net/myDB"
    );
}

module.exports = connectDB