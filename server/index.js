import express from "express";
import mongoose from "mongoose";
import UserModel from "./user.js";

const app = express();
// const URL_CONNECT =
//   "mongodb+srv://admin23:BKb51Te5uMIl8MCN@cluster1.0hd9hsx.mongodb.net/Cluster1?retryWrites=true&w=majority&appName=Cluster1";

const URL_CONNECT =
  "mongodb+srv://admin23:gThGFL73JpwzQbRw@nodeapi.gte64vi.mongodb.net/NodeApi?retryWrites=true&w=majority&appName=NodeApi";
app.use(express.json());

app.listen(3000, () => {
  console.log("Server node");
});

app.get("/", (req, res) => {
  res.send("Hello from home");
});

// Agregar producto
app.post("/product", async (req, res) => {
  try {
    const product = await UserModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(URL_CONNECT)
  .then(() => {
    console.log("Connect whit mongo ");
  })
  .catch((error) => {
    console.log(error);
  });
// //GET POST PUT DELETE
// app.get("/", (req, res) => {
//   res.send("Hello from home new");
// });

// mongoose
//   .connect(URL_CONNECT)
//   .then(() => {
//     console.log("connect with mongo");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
