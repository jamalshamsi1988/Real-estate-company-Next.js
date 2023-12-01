// import mongoose from "mongoose";

// async function connectDB() {
//   if (mongoose.connections[0].readyState) return;
//    await mongoose.connect(process.env.MONGO_URI);
//   console.log("Connected To DB");
// }

// export default connectDB;

import mongoose from "mongoose"


async function connectDB (){
 
        if(mongoose.connections[0].readyState) return;
        mongoose.set("strictQuery" , false)

        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to DB")
        
}
export default connectDB;