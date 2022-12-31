import mongoose from "mongoose";

const DATABASE_URL = "mongodb://mongo:docker@localhost:27017";

async function connect(): Promise<void> {
 try {
   await mongoose.connect(DATABASE_URL);
 } catch (err) {
    console.log(`Database connection error: ${err}`);
 }

}

export default connect;
