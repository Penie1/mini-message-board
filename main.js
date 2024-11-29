import express from "express";
const app = express();
const PORT = process.env.port || 3000;
app.get("/", (req, res) => {
  res.send("<h1>Express</h1>");
});

app.listen(PORT, () => {
  console.log(`The server is listening on ${PORT}`);
});
