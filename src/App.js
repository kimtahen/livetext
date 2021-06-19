import React, {useEffect, useState, useRef} from 'react'
import {Route} from 'react-router-dom';
import Client from './components/client/Client.js'
import Host from './components/host/Host.js';
function App() {

	return (
		<div className="App">
			<Route exact path="/" component={Client}/>
			<Route exact path="/host" component={Host}/> 
		</div>
	);
}

export default App;
