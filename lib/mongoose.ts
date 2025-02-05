import mongoose, { Mongoose } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

interface MongooseCache {
    conn:Mongoose | null
    promise : Promise<Mongoose> | null
}

declare global {
    var mongooseCache: MongooseCache
}

let cached = global.mongooseCache

if (!cached) {
    cached = global.mongooseCache = { conn: null, promise: null }
}

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => {
            console.log('connect to mongodb')
            return mongoose
        }).catch(err => {
            console.log("Error connecting to MongoDB");
            throw err;
        });
    }
    cached.conn = await cached.promise
    return cached.conn
}


export default connectDB;