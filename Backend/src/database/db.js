const mongoose = require('mongoose');

const connectionInstance = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB CONNECTIOIN SUCCESSFULL");
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED" , error);
    }
}

module.exports = {connectionInstance};