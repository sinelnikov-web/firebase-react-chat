import {Link} from "react-router-dom";
import {Avatar, Button} from "@material-ui/core";
import React, {useContext} from "react";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";


const Navbar = React.memo((props) => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <>
            <header>
                <nav className="navbar">
                    {user
                        ?
                        <>
                            <Avatar className={'user-avatar'} src={user.photoURL}/>
                            <Button onClick={() => auth.signOut()} className={"navbar__link"} variant="contained"
                                    color="secondary">
                                Выйти
                            </Button>
                        </>
                        :
                        <Button className={"navbar__link"} variant="contained" color="secondary" component={Link}
                                to={'/login'}>
                            Войти
                        </Button>
                    }
                </nav>
            </header>
        </>
    )
})


export default Navbar