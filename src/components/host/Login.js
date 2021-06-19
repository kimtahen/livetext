import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, sessionLogin} from '../../apis.js'
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
			<input type='text' name='id' placeholder = 'ID' ref={idRef}/>
			<br/>
			<input type="password" name='pw' placeholder ='PW' ref={pwRef}/>
			<br/>
			<button onClick={()=>{submit()}}>submit</button>
		</div>
	)
}
export default Login;
