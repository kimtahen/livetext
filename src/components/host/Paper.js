import React, {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
let socket;
const Paper = () => {
	const [text, setText] = useState('');
	const [editText, setEditText] = useState('');
	const editorRef = useRef();
	useEffect(()=>{
		socket = io.connect('http://kimtahen.iptime.org');
	},[]);
	const editorInput = (e) => {
		const editorInstance = editorRef.current.getInstance();
		socket.emit('write',editorInstance.getMarkdown())
	}
	const textInput = (e) => {
		setText(e.target.value);
		socket.emit('write',e.target.value);
	}

	
	return (
		<div>
			<input style={{width: '100%', }} onChange={textInput}/>	
			<Editor
				previewStyle="vertical"
				height="300px"
				useStatistics={false}
				initialEditType="markdown"
				placeholder="edit"
				onChange={editorInput}
				ref={editorRef}
			/>
		</div>
	)
}
export default Paper
