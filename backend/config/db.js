import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGODB Connnected: ${connect.connection.host}`)
    } catch (error){
        console.log(`Error:  ${error.message}`)
        process.exit(1) // process code 1 code means exit while failure, 0 means success
    }
}