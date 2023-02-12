import "dotenv/config";
import "./db/connection.js";
import express from "express";
import { baseRoute } from "./routes/index.js";

const route = express.Router();

const rooRouter = baseRoute(route);

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/v1", rooRouter);

app.listen(port, () => {
	console.log(`server is listening on ${port}`);
});
