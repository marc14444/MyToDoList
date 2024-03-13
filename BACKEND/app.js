import express from "express";
import path from 'path';
import { fileURLToPath } from "url";
import {config} from "dotenv";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import userRouter from "./routes/users.js";
//import articleRouter from "./routes/site.js"
import {connectDb} from "./DataBase/db.js";
import cors from "cors";
import bodyParser from "body-parser";

//import admin from "./controllers/admin.js";

config()
connectDb()



const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/user", userRouter);
//app.use("/api/sitetouristique", articleRouter);

connectDb()
.then(()=>{
    app.listen(port, () => console.log(`le serveur a bien demarrer sur http://localhost:${port}`));
}).catch(()=>{
    console.log("ok");
})