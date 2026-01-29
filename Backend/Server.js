import express from "express"
import dotenv from "dotenv"
import AuthRouter from "./Routes.js/Auth.js";
import TaskRouter from "./Routes.js/Task.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());

app.use("/api/v1/auth",AuthRouter);
app.use("/api/v1/tasks",TaskRouter);


app.listen((PORT),() => {
    console.log(`listening on port ${PORT}`);
})
