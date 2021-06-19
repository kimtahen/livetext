import React, {useState, useEffect, useRef} from 'react';
import {Viewer} from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import io from 'socket.io-client';
let socket;
const Client = () => {
	const [global, setGlobal] = useState()
	const viewerRef = useRef()
	useEffect(()=>{
		socket = io.connect("http://kimtahen.iptime.org");
		socket.on("global", (data)=>{
			viewerRef.current.getInstance().setMarkdown(data);
			setGlobal(data);
		});
	},[])
	return (
		<div>
			{global}
			<Viewer ref={viewerRef}/>
		</div>
	)
}
export default Client;
