import React from "react";


const Message = ({messageUID, userUID, photoURL, text, displayName}) => {
    return(
        <div
             className={`message chat__message ${messageUID === userUID ? 'chat__message_from-me' : ''}`}>
            <img src={photoURL} alt="" className="message__user-photo"/>
            <div className="message__body">
                <p className="message__username">{displayName}</p>
                <p className="message__text">{text}</p>
            </div>
        </div>
    )
}

export default Message