import express from "express";

const app = express();
const PORT = 3001;

// ✅ Root route
app.get("/", (_req, res) => {
  res.send("Hello, Node + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
