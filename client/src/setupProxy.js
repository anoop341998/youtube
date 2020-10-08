const { createProxyMiddleware } = require('http-proxy-middleware');
const env = require('dotenv').config();
const port = process.env.PORT || 5000;


module.exports = function(app) {
  app.use('/', createProxyMiddleware({
      target: `http://localhost:${port}/`,
      changeOrigin: true,
    })
  );
};

// rename this file to setupProxy.js to work