import React from 'react';
import { ChatEngine} from 'react-chat-engine';
// Components
import Navbar from './Navbar';

const ChatPage = () => {

    return (
        <>
            <Navbar />
            <ChatEngine
                height='calc(100vh - 50px)'
                projectID='f7873ee9-c75f-444f-8ca6-5ae6c5996f28'
                userName={localStorage.getItem('name')}
                userSecret={localStorage.getItem('uid')}
		    />
        </>
    );
};

export default ChatPage;