import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();

app.get("/*", function (_req, res) {
  const html = renderToString(<App />);

  return res.status(200).send(`<html><body>${html}</body></html>`);
});

app.listen(6900, () => {
  console.log("Listening on port 6900");
});
