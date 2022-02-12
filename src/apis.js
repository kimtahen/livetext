import axios from 'axios';
import * as config from './config';
const fetch = require('node-fetch');

export const login = async ({id, pw}) => {
	let send = {
		id: id,
		pw: pw,
	}
	let res;
	try{
		res = await axios.post(config.SERVER_URL+'/login',{
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
		res = await axios.post(config.SERVER_URL+'/sessionlogin',{
		});
	}catch(err){
		console.log(err);
	}
	return res.data;
}
export const logout = async () => {
	let res;
	try {
		res = await axios.post(config.SERVER_URL+'/logout',{});
	}catch(err){
		console.log(err);
	}
	return res.data;
}
