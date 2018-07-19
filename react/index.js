let express = require('express');
let path = require('path');
let bodyParser = require("body-parser");
let app = express();
let webpack = require("webpack");
let webpackHotMiddleware = require("webpack-hot-middleware");
let webpackDevMiddleware = require("webpack-dev-middleware");
let config = require('./webpack.config');
const userRoute = require('./server/routes/user');

//静态文件配置
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

let compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: '/dist/',
    stats: { colors: true }
}))

app.use(webpackHotMiddleware(compiler))

app.use('/user', userRoute);
// 对所有(/)URL或路由返回index.html 
app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'dist') + '/index.html');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
});
