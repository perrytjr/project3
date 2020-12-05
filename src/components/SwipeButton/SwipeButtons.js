import React from 'react';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './SwipeButtons.css';

function SwipeButtons() {


    
    


    return (
        <div className="swipeButtons">
            <IconButton>
            <ArrowBackIcon className="back" fontSize="large"/>
            </IconButton>
            <IconButton>
            <ArrowForwardIcon className="forward" fontSize="large"/>
            </IconButton>
            
        </div>
    );
};

export default SwipeButtons;