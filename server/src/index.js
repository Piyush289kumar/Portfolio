import express from "express";

const PORT = 3001;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is Live",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on PORT : ${PORT}`);
});
