import mongoose from "mongoose";
import config from "../config/config.js";

async function ConnectDB() {
    try {
        await mongoose.connect(config.MONGO_URI);
    mongoose.connection.on('connected', () => {
        console.log('MONGODB CONNECTED');
    });
    mongoose.connection.on('disconnected', () => {
        console.log('MONGODB DISCONNECTED');
    })
    } catch (error) {
        console.log('MONGODB FAILED TO CONNECT:', error);
    }
}

export default ConnectDB;