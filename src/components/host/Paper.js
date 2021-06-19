import React, {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client';
let socket;
const Paper = () => {
	const [text, setText] = useState('');
	useEffect(()=>{
		socket = io.connect('http://kimtahen.iptime.org');
	},[]);
	const textInput = (e) => {
		setText(e.target.value);
		socket.emit('write',e.target.value);
	}

	
	return (
		<div>
			<input style={{width: '100%', }} onChange={textInput}/>	
			{text}	
		</div>
	)
}
export default Paper
