import React from "react";
import {Route , Switch , Redirect} from 'react-router-dom'
// Components
import LoginPage from "./components/login/LoginPage";
import ChatPage from "./components/chat/ChatPage";
import Context from "./components/context/Context";

function App() {

	return (
		<div>
			<Context>
				<Switch> 
					<Route exact path='/login' component={LoginPage} />
					<Route path='/chat' component={ChatPage} />
					<Redirect from='/' to='/login' />
				</Switch>
			</Context>
		</div>
	);
}

export default App;
