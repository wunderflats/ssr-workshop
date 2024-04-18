import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Request } from "express";

export const renderer = (req: Request): string => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  return `
        <html>
            <body>
            <div id="main">${html}</div>
            <script src="/public/client.bundle.js"></script>
            </body>
        </html>`;
};
