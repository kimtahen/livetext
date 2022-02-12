import React, {useEffect, useRef, useState} from 'react'
import io from 'socket.io-client';
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';

import * as config from '../../config';

let socket;
const Paper = () => {
	const [text, setText] = useState('');
	const [editText, setEditText] = useState('');
	const editorRef = useRef();
	useEffect(()=>{
		socket = io.connect(config.SERVER_URL);
	},[]);
	let markdown;
	let editorInstance
	const editorInput = (e) => {
		editorInstance = editorRef.current.getInstance();
		markdown = editorInstance.getMarkdown();
		setEditText(markdown);
		if(markdown.charAt(markdown.length-1) == " " || markdown.charAt(markdown.length-1).match(/\n/))
			socket.emit('write',markdown)
	}
	
	return (
		<div>
			<Editor
				previewStyle="vertical"
				height="300px"
				useStatistics={false}
				initialEditType="markdown"
				placeholder="edit"
				onChange={editorInput}
				ref={editorRef}
			/>
			{editText}
		</div>
	)
}
export default Paper
