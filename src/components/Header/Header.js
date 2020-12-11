import React from 'react';
import "./Header.css";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
           
            <Link to="/flick">
            <IconButton>
                <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZknl3hlQgHNJwJFD2RPe5JyR-kI2emTyhHA&usqp=CAU"
                    alt="solemate logo" />
            </IconButton>
            </Link>
            <h2 className="header__h">Find Sole-Mates</h2>
            <Link to="/chatlogin">
            <IconButton>
                <ChatBubbleIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>

        </div>
    )
}

export default Header;