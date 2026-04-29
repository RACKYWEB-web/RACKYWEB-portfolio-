const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/form", (req, res) => {
  console.log(req.body); // shows data you receive

  res.json({
    message: "Data received successfully",
    data: req.body
  });
});

app.listen(process.env.PORT || 3000);
