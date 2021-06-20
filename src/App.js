import './App.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import Chat from "./Components/Chat/Chat";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Layout>
                    <Navbar/>
                    <main>
                        <Switch>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/chat'} component={Chat}/>
                        </Switch>
                    </main>
                </Layout>
            </HashRouter>
        </div>
    );
}

export default App;
