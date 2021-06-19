import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Login from './Login.js'
import {sessionLogin} from '../../apis.js'
const Host = () => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.isAuth);	

	useEffect(async()=>{
		dispatch({type: 'set_isLoading', isLoading: true});	
		try{
			let {isAuth}= await sessionLogin(); 
			dispatch({type: 'set_isAuth', isAuth})
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});

		}catch(err){
			console.log(err);
			dispatch({type: 'set_isLastAccessSucceed', isLastAccessSucceed: true});	
		}
		dispatch({type: 'set_isLoading', isLoading: false});

	},[]);
	useEffect(()=>{
		console.log(isAuth);
	},[isAuth]);

	return (
		<div>
			{!isAuth ? 
				<Login />
				:
				<div>logined</div>
			}
		</div>
	)
}
export default Host;
