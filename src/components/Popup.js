import React from 'react';

function Popup(props) {
    return (props.trigger) ? (

        <div className="popup">
            <div className="item-popup">
                <button onClick={() => props.setTrigger(false)}>X</button>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default Popup;