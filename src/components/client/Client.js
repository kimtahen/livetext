import React, {useState, useEffect} from 'react';

import io from 'socket.io-client';
let socket;
const Client = () => {
	const [global, setGlobal] = useState()
	useEffect(()=>{
		socket = io.connect("http://kimtahen.iptime.org");
		socket.on("global", (data)=>{
			setGlobal(data);
		});
	},[])
	return (
		<div>
			{global}
		</div>
	)
}
export default Client;
