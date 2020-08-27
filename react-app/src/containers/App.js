import React from 'react';
import './App.css';
import Packs from "./Packs/Packs";
import Layout from "../components/Layout/Layout";
import {useAuth0} from "@auth0/auth0-react";
import Welcome from "../components/Welcome/Welcome";

const App = () => {
    const {isAuthenticated} = useAuth0();
    const content = isAuthenticated? <Packs/>: <Welcome/>;
    return (
        <div className="App">
            <Layout>
                {content}
            </Layout>
        </div>
    );
}

export default App;
