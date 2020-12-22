module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    hotOnly: true,
    before: (app) => {
      app.get('/mock/users', (req, res) => {
        const users = ['Jackson', 'Tim'];
        return res.json(users);
      });
    },
  },
};
