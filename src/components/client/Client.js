import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
const Client = () => {
	let socket;
	const [global, setGlobal] = useState()
	useEffect(()=>{
		socket = io("/");
		socket.on("global", (data)=>{
			setGlobal(data);
			console.log(data);
		});
	},[])
	return (
		<div>
			{global}
		</div>
	)
}
export default Client;
