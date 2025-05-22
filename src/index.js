import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Run At : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`MongoDB connection Error : ${error}`);
  });
