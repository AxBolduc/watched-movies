const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://'+process.env.REACT_APP_DOMAIN+':4000',
      changeOrigin: true,
    })
  );
};