import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

//RUTE
import userRoutes from "./routes/userRoutes.js";
import indexRoutes from './routes/indexRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use(indexRoutes)

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server berjalan di port http://localhost:${PORT}`);
});
