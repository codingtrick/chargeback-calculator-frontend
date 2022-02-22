const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api/issue", {
      target: "https://localhost:44337/",
      changeOrigin: true,
    })
  );
};
