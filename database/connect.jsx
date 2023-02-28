import mongoose from "mongoose";

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);

        if (connection.readyState == 1) {
            console.log("Database connected");
        }
    } catch (e) {
        return Promise.reject(e);
    }
};

export default connectMongo;
