import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap';
import Login, {Logout} from './Login.js'
import Paper from './Paper.js'
import {sessionLogin} from '../../apis.js'
const Host = () => {
	const dispatch = useDispatch();
	const isFirstRender = useRef(true);
	const isAuth = useSelector((state) => state.isAuth);	

	useEffect(async()=>{
		//because isFirstRender is update at the end of this useEffect callback this sequence is possible
		if(isFirstRender.current){
			isFirstRender.current = false;
		}
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

	return (
		<Container >
			<Row className="justify-content-md-center">
			<Col></Col>
			<Col>
			{!isAuth ? 
				<Login />
				:
				<Logout />
			}
			</Col>
			<Col></Col>
			</Row>
			<Row>
			{isAuth ?
				<Paper/>
				:
				<></>
			}
			</Row>

		</Container>
	)
}
export default Host;
