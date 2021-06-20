import {useAuthState} from "react-firebase-hooks/auth";
import React, {useContext} from "react";
import {Context} from "../../index";
import Loader from "../Loader/Loader";


const Layout = React.memo((props) => {

    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {props.children}
        </>
    )
})


export default Layout