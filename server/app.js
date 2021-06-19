const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const path = require('path')
let user = {
	user_id: 'kim',
	user_pwd: '0347',
}
const port = 80;

//middleware
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'kimtahen',
	resave: false,
	store: new FileStore()
}));
//socket io
io.on("connection", (socket) => {
	console.log('connected');
	io.emit("global", 'hello client');
	socket.on('write',(data)=>{
		io.emit('global', data);
	});

});
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'../build/index.html'));
});
app.get('/host',(req,res)=>{
	res.sendFile(path.join(__dirname,'../build/index.html'));
});


app.post('/login',(req, res) => {
	console.log(req.body);
	console.log(req.body.id, req.body.pw);
	if(req.body.id == user.user_id && req.body.pw == user.user_pwd){
		req.session.logined = true;
		req.session.user_id = req.body.id;
		res.send({isAuth: true});
	} else {
		req.session.logined = false;
		res.send({isAuth: false});
	}
});
app.post('/sessionlogin', (req, res)=>{
	if(req.session.logined == true){
		res.send({isAuth: true});
	} else {
		res.send({isAuth: false});
	}
});
app.post('/logout', (req, res) => {
	req.session.logined = false;
	res.send({isAuth: false});
});


http.listen(port, ()=>{
	console.log(`${port}`);
})
