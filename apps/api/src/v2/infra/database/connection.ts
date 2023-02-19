import mongoose from "mongoose";

import SECRETS from "@/constants/secrets";

async function connect(): Promise<void> {
  try {
    await mongoose.connect(SECRETS.DATABASE_URL);
  } catch (err) {
    console.log(`Database connection error: ${err}`);
  }
}

export default connect;
