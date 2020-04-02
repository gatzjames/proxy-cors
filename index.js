/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const PROXY_URL = process.env.PROXY_URL;
const PORT = process.env.PORT;

if (!PROXY_URL) {
  throw new Error("PROXY_URL env variable is not set.");
}

const app = express();

app.use(cors());
app.options("*", cors());

app.use(
  "/",
  createProxyMiddleware({
    target: PROXY_URL,
    logLevel: "debug",
    secure: false,
    changeOrigin: true,
    autoRewrite: true,
    hostRewrite: true,
    followRedirects: true,
    protocolRewrite: "https"
  })
);

app.listen(PORT || 4000, () => {
  console.log("Proxy listening on port: ", PORT);
});
