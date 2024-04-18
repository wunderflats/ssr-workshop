import express from "express";
import { renderer } from "./server-entry";

const app = express();

app.use("/public", express.static("dist/public"));

app.get("/*", function (_req, res) {
  return res.status(200).send(renderer());
});

app.listen(6900, () => {
  console.log("Listening on port 6900");
});
