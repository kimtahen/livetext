import {createStore} from 'redux'

const initialState = {
	isLoading: false,
	isAuth: false,
	isLastAccessSucceed: true,
}

const changeState = (state = initialState, {type, ...rest}) =>{
	switch (type) {
		case 'set_isLoading':
			return{...state, ...rest}
		case 'set_isAuth':
			return{...state, ...rest}
		case 'set_lastAccessSucceed':
			return{...state, ...rest}
		default:
			return state
	}
}
const store = createStore(changeState)
export default store
