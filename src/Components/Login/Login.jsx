import React from "react";
import {Button} from "@material-ui/core"
import {useContext} from "react";
import {Context} from "../../index";
import firebase from "firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {Redirect} from "react-router-dom";

const Login = React.memo(() => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    if (user) {
        return <Redirect to={'/chat'}/>
    }

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

    return (
        <div className={'login'}>
            <Button onClick={login} variant="contained" color="primary" className="login__button">Log-in with
                google</Button>
        </div>
    )
})


export default Login