import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {InputGroup, Button, Form} from 'react-bootstrap';
import {login, sessionLogin, logout} from '../../apis.js'
const Login = () => {
	const dispatch = useDispatch()
	const idRef = useRef('');
	const pwRef = useRef('');
	const submit = async () =>{
		dispatch({type: 'set_isLoading', isLoading: true});	
		try{
			let {isAuth}= await login({id: idRef.current.value, pw: pwRef.current.value})
			dispatch({type: 'set_isAuth', isAuth})
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});

		}catch(err){
			console.log(err);
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});	
		}
		dispatch({type: 'set_isLoading', isLoading: false});

	}
	return (
		<div>
			<input type='text' name='id' placeholder = 'ID' ref={idRef} style={{width:'100%'}}/>
			<br/>
			<input type="password" name='pw' placeholder ='PW' ref={pwRef} style={{width:'100%'}}/>
			<br/>
			<Button onClick={()=>{submit()}} style={{width:'100%'}}>submit</Button>
		</div>
	)
}
export const Logout = () => {
	const dispatch = useDispatch();
	const onLogout = async () => {
		dispatch({type: 'set_isLoading', isLoading: true});	
		try{
			let {isAuth} = await logout();
			dispatch({type: 'set_isAuth', isAuth})
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});

		}catch(err){
			console.log(err);
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});	
		}
		dispatch({type: 'set_isLoading', isLoading: false});
	}	
		
	return(
		<Button variant="primary" onClick={()=>{onLogout()}} style={{width:"100%"}}>Logout</Button>
	)
}
export default Login;
