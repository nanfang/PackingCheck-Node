import React, {useState, Component} from 'react';
import './App.css';
import Packs from "./Packs/Packs";
import Layout from "../components/Layout/Layout";

class App extends Component {

    constructor(props) {
        super(props);
    }

// State:
//    - All packs
//    - Current pack
//    - Current pack's items
//    - Unchecked items
//    - Checked items¡

    state = {
        packs: [
            // {id: 1, name: 'Trip to Amsterdam'},
            // {id: 2, name: 'Trip to Beijing'},
            // {id: 3, name: 'Trip to Vancouver'}
        ]
    }

    render = () => {
        return (
            <div className="App">
                <Layout>
                    <Packs packs={this.state.packs} addPack={this.addPack}/>
                </Layout>

            </div>

        );
    }
}

export default App;
