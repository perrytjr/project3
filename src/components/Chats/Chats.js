import React from 'react';
import './Chats.css';
import Chat from '../Chat/Chat';

function Chats () {
    return <div className="chats">
        <Chat
        name="Mark"
        message="what up"
        timestamp=" 40 seconds ago"
        profilePic="..."/>
    </div>

};

export default Chats;