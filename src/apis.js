import axios from 'axios';
const fetch = require('node-fetch');

export const login = async ({id, pw}) => {
	let send = {
		id: id,
		pw: pw,
	}
	let res;
	try{
		res = await axios.post('/login',{
			id: id,
			pw: pw,
		});
	}catch(err){
		console.log(err);
	}
	return res.data;
}
export const sessionLogin = async () => {
	let res;
	try {
		res = await axios.post('/sessionlogin',{
		});
	}catch(err){
		console.log(err);
	}
	return res.data;
}
export const logout = async () => {
	let res;
	try {
		res = await axios.post('/logout',{});
	}catch(err){
		console.log(err);
	}
	return res.data;
}
