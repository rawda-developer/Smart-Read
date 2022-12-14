import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import bodyParser from "body-parser";
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
const app = express();
app.use(bodyParser.json());
const PORT = config.port;
app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.send("Smart Read");
});
app.use(authRouter);
app.use(userRouter);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
  next();
});

// Database Connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect database ${config.mongoUri}`);
});
