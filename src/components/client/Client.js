import React, {useState, useEffect, useRef} from 'react';
import {Viewer} from '@toast-ui/react-editor';
import {Container,Row, Col} from 'react-bootstrap';
import '@toast-ui/editor/dist/toastui-editor.css';
import io from 'socket.io-client';

import * as config from '../../config';

let socket;
const Client = () => {
	const [global, setGlobal] = useState()
	const viewerRef = useRef()
	useEffect(()=>{
		socket = io.connect(config.SERVER_URL, {});
		socket.on("global", (data)=>{
			viewerRef.current.getInstance().setMarkdown(data);
			setGlobal(data);
		});
	},[])
	return (
		<Container>
		<Row>
			<Viewer ref={viewerRef}/>
		</Row>
		</Container>
	)
}
export default Client;
