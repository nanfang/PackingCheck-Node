import React, {Component} from "react";
import axios from 'axios';
import Pack from "../../components/Pack/Pack";
import './Packs.css';

class Packs extends Component {

    state = {
        newPack: '',
        packs: [],
        selectedPack: {id: null, name: ''},
        items: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadPacks();
    }

    loadPacks = () => {
        axios.get("/packs")
            .then(response => {
                console.log(response)
                this.setState({packs: response.data})
            });
    }

    loadItems = (packId) => {
        //TODO: load all the items in this pack
    }

    addPack = (packName) => {
        const packs = [...this.state.packs];
        packs.push({id: 9, name: 'Trip To XXX'})

        this.setState({
            packs: packs
        })
    };

    removePack = (packId) => {
        console.log(`remove pack ${packId}`);
    };

    getPackName = (packId) => {
        return 'Beijing';
    }

    selectPack = (packId) => {
        if (this.state.selectedPack.id !== packId){
            const packName = this.getPackName(packId);
            this.setState({selectedPack: {id: packId, name: packName}, items: []})
            this.loadItems(packId);
        }
    };

    packsForRender = () => {
        const packs = this.state.packs.map((pack, index) => {
            return <Pack key={pack.id}
                         name={pack.name}
                         click={() => this.selectPack(pack.id)}
                         remove={() => this.removePack(pack.id)}/>
        });
        return packs;
    }

    itemsForRender = () => {
        let packItems = this.state.selectedPack.id ?
            <div>Loading ...!</div> : <div>Please select a pack to show items</div>;
        // const packItems = this.state.selectedPack.id?
        //     <PackItems items={this.state.items}>:<div>Please select a pack to show items</div>;
        if (this.state.items.length > 0) {
            packItems = <div>items</div>
        }
        return packItems;
    }

    render() {
        const packs = this.packsForRender();
        const packItems = this.itemsForRender();
        return (
            <React.Fragment>
                <section className="left">
                    <h1>Packs</h1>
                    <input type="text" value={this.state.newPack}
                           onChange= {(event) =>
                           {this.setState({newPack: event.target.value})}
                           }/>
                    <button onClick={this.addPack}>Create a new pack</button>
                    {packs}
                </section>
                <section className="left">
                    <h1>Packing Items {this.state.selectedPack.name}</h1>
                    {packItems}
                </section>
            </React.Fragment>
        );
    }
}

export default Packs;