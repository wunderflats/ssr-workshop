import express from "express";

const app = express();

app.get("/*", function (req, res) {
  return res.status(200).send("<html><body>Hello world</body>");
});

app.listen(6900, () => {
  console.log("Listening on port 6900");
});
