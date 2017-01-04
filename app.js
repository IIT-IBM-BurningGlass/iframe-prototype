var express = require('express'), routes = require('./routes'), http = require('http'), path = require('path');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

var server=require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(){ /* … */ });
server.listen(8888, function(){
console.log('connection accepted');
});
server.on('error', function(err){console.log(err);});
// all environments
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/views/style')));

////////////////////////////     API connect  ////////////////////


app.get('/', routes.index);
http.createServer(app).listen(app.get('port'), '0.0.0.0');
