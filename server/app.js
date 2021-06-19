const express = require('express');
const app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const path = require('path');
const http = require("http").createServer(app);
const io = require('socket.io')(http, {
	path: '/socket.io'
});
let user = {
	user_id: 'kim',
	user_pwd: '0347',
}
const port = 8000;

//middleware
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'kimtahen',
	resave: false,
	store: new FileStore()
}));
//routing
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

//socket io
io.on("connection", (socket) => {
	io.emit("global", 'hello client');

});
http.listen(port, ()=>{
	console.log(`${port}`);
})
