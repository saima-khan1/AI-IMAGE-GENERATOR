import express from "express";

const app = express();
const PORT = 3001;

app.get("/", (_req, res) => {
  res.send("Hello, Node + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
