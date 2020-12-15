import React from 'react';



import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="sidebar">
    
    {
      users
        ? (
          
            <div className="activeContainer">
              <h4>Athletes currently in the chat:</h4>
              <br/>
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>

        )
        : null
    }
  </div>
);

export default TextContainer;