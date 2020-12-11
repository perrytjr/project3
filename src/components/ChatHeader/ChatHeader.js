import React from 'react';
import "./ChatHeader.css";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";

function ChatHeader(props) {


    return (
        <div className="header">
            <Link to="/flick">
                <IconButton  >
                    <ArrowBackIosIcon fontSize="large" className="header__ArrowIcon" />
                </IconButton>
            </Link>




            {/* <Link to="/flick">
                
            <IconButton>
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZknl3hlQgHNJwJFD2RPe5JyR-kI2emTyhHA&usqp=CAU"
                    alt="solemate logo" />
            </IconButton>
            </Link> */}
            <h2 className="header__h">Messaging</h2>
            <Link to="/chat">
                <IconButton>
                    <ChatBubbleIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>

        </div>
    )
}

export default ChatHeader;