import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

//User authentication
import authRoute from "./routes/authRoute.js";
app.use("/auth", authRoute);

import eventRoute from "./routes/events.js";
app.use("/user", eventRoute);
app.use("/admin", eventRoute);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () =>
      console.log(`http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("connection error:", err);
  });

// mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`)
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log("http://localhost:" + PORT);
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     })
