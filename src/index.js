import dotenv from "dotenv";
import { app } from "./App.js";
import connectDB from "./db/index.js";


dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Run At : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection Error : ${error}`);
  });
