import React, {Component} from 'react';
import './App.css';
import Packs from "./Packs/Packs";
import Layout from "../components/Layout/Layout";

class App extends Component {
    render = () => {
        return (
            <div className="App">
                <Layout>
                    <Packs/>
                </Layout>
            </div>
        );
    }
}

export default App;
