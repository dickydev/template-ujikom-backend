import express from "express";

const app = express();
const port = 5500;

app.get("/api/home", (req, res) => {
  res.send("Halo dunia");
});

app.listen(port, () => {
  console.log(`Server berjala di port http://localhost:${port}`);
});
