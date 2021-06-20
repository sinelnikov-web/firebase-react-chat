import {Button, FormControl, Icon, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";
import React, {useContext, useEffect, useRef, useState} from "react";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom"
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "../Loader/Loader";
import firebase from "firebase";
import Message from "./Message/Message";

const Chat = React.memo(() => {

    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [newMessage, setNewMessage] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const chatMessagesArea = useRef(null)

    useEffect(() => {
        chatMessagesArea.current?.scrollTo({
            behavior: 'smooth',
            top: chatMessagesArea.current.scrollHeight
        })
    }, [messages])

    const sendMessage = () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: newMessage,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setNewMessage('')
    }

    if (!user) {
        return <Redirect to={'/login'}/>
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <section className="chat">
            <div ref={chatMessagesArea} className="chat__messages">
                {messages.map((message, index) => {
                    return (
                        <Message
                            key={index}
                            displayName={message.displayName}
                            userUID={user.uid}
                            messageUID={message.uid}
                            text={message.text}
                            photoURL={message.photoURL}
                        />
                    )
                })}
                <span className="scrollTo"/>
            </div>
            <div className="chat__controls">
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-message">Message</InputLabel>
                    <OutlinedInput
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage()
                            }
                        }}
                        value={newMessage}
                        fullWidth
                        id="outlined-adornment-message"
                        endAdornment={
                            <InputAdornment position="end">
                                <Button
                                    onClick={sendMessage}
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Send
                                </Button>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </div>
        </section>
    )
})


export default Chat