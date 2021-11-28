import React from "react";
import {Route , Switch , Redirect} from 'react-router-dom'
// Components
import LoginPage from "./components/login/LoginPage";
import ChatPage from "./components/chat/ChatPage";

function App() {

	return (
		<div>
			<Switch> 
				<Route exact path='/login' component={LoginPage} />
				<Route path='/chat' component={ChatPage} />
				<Redirect from='/' to='/login' />
			</Switch>
		</div>
	);
}

export default App;
