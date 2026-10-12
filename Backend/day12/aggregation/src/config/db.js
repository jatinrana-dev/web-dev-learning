import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/aggregation_pipeline_class';

    await mongoose.connect(mongoUri);

    console.log("mongodb is connected")

    return mongoose.connection;
}
