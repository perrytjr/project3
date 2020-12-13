import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";




import './InfoBar.css';

const InfoBar = ({ room  }) => (

  <div className="infoBar">
    <Link to="/chatlogin">
      <IconButton  >
        <ArrowBackIosIcon fontSize="large" className="exit__room" />
      </IconButton>
    </Link>
    <div className="chatroom__name">
      <h3>ChatRoom: {room}</h3>
    </div>

    



  </div>
);

export default InfoBar;