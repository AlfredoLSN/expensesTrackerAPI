import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log("Servidor rodando na url: http://localhost:3333");
});
