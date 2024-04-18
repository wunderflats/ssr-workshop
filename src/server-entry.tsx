import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export const renderer = (): string => {
  const html = renderToString(<App />);

  return `
        <html>
            <body>
            <div id="main">${html}</div>
            <script src="/public/client.bundle.js"></script>
            </body>
        </html>`;
};
