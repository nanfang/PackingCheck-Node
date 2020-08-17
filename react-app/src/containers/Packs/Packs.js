import React, {Component} from "react";
import axios from 'axios';
import Pack from "../../components/Pack/Pack";
import './Packs.css';

class Packs extends Component {

    state = {
        newPack: '',
        packs: [],
        selectedPack: {id: null, name: ''},
        packItems: null
    }

    componentDidMount() {
        this.loadPacks();
    }

    loadPacks = () => {
        axios.get("/packs")
            .then(response => {
                this.setState({packs: response.data})
            });
    }

    loadItems = (packId) => {
        if (packId === null)
            return []
        const url = `/packs/${packId}/items`;
        axios.get(url).then(response => {
            // console.log('loaded items', response.data);
            this.setState({packItems: response.data});
        });
    }

    addPack = () => {
        const packs = [...this.state.packs];
        if (this.state.newPack.trim().length > 0) {
            const newPack = {name: this.state.newPack};

            axios.post("/packs", newPack)
                .then(response => {
                    newPack.id = response.data.pack.id;
                    packs.unshift(newPack);
                    this.setState({packs: packs})
                });
        }
    };

    removePack = (packId, event) => {
        console.log(`remove pack ${packId}`);
        axios.delete(`/packs/${packId}`)
            .then(response => {
                this.setState({
                    packs: this.state.packs.filter((item, index) => {
                        return item.id !== packId;
                    })
                })
                if (packId === this.state.selectedPack.id) {
                    this.setState({
                        selectedPack: {id: null, name: ''},
                        items: null
                    })
                }
            });
        event.stopPropagation();

    };

    getPackName = (packId) => {
        for (let i = 0; i < this.state.packs.length; i++) {
            if (this.state.packs[i].id === packId)
                return this.state.packs[i].name;
        }
        return '';
    }

    selectPack = (packId, event) => {
        if (this.state.selectedPack.id !== packId) {
            const packName = this.getPackName(packId);
            this.setState({selectedPack: {id: packId, name: packName}, packItems: null})
            this.loadItems(packId);
        }
    };


    packsForRender = () => {
        const packs = this.state.packs.map((pack, index) => {
            return <Pack key={pack.id}
                // name={pack.name + '-' + pack.id}
                         name={pack.name}
                         isSelected={pack.id === this.state.selectedPack.id}
                         select={event => this.selectPack(pack.id, event)}
                         remove={event => this.removePack(pack.id, event)}/>
        });

        return packs;
    };


    itemsForRender = () => {
        // console.log("select", this.state.selectedPack);
        let packItems = this.state.selectedPack.id === null ?
            <tr>
                <td>Please select a pack to show items</td>
            </tr> :
            <tr>
                <td>Loading ...!</td>
            </tr>;
        // const packItems = this.state.selectedPack.id?
        //     <PackItems items={this.state.items}>:<div>Please select a pack to show items</div>;
        if (this.state.selectedPack.id && this.state.packItems !== null) {
            console.log('render items', this.state.packItems);
            packItems = this.state.packItems.map((item, index) =>
                <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>
                        {" "}
                        <div className="float-right my-text-primary-color ml-2">
                            <a href="#delete">⊗</a>
                        </div>
                        <div className="float-right my-text-primary-color">
                            <a href="#up" className="px-2">
                                △
                            </a>
                            <a href="#down">▽</a>
                        </div>
                    </td>
                </tr>
            )
        }
        return packItems;
    }


    render() {
        const packs = this.packsForRender();
        const packItems = this.itemsForRender();
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md">
                        <div className="card bg-white">
                            <div className="card-header mx-auto shadow p-3 bg-white rounded vert-offset-top"
                                 style={{width: "98%"}}>
                                <h4 className="card-title text-left">Packs</h4>
                                <div className="input-group mb-3 mx-auto" style={{width: "100%"}}>
                                    <input type="text" className="form-control" placeholder="Your next destination"
                                           value={this.state.newPack}
                                           onChange={(event) => {
                                               this.setState({newPack: event.target.value})
                                           }}
                                    />
                                    <div className="input-group-append">
                                        <button className="input-group-text" onClick={this.addPack}>
                                            Create a new pack
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group text-left">
                                    {packs}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="card packing-items">
                            <div className="card-header mx-auto" style={{width: "100%"}}>
                                <div className="float-left">
                                    <h4 className="card-title text-left">Your trip {this.state.selectedPack.name} </h4>
                                    <h6 className="card-subtitle text-left text-muted">
                                        Checklist
                                    </h6>
                                </div>
                                <div className="float-right">
                                    <button className="btn btn-info btn-lg mt-1">Start Checking</button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="card-text text-left">
                                    {this.state.selectedPack.id &&
                                    <div className="input-group mb-3 mx-auto" style={{width: "100%"}}>
                                        <input type="text" className="form-control" id="add-item"
                                               placeholder="Add new item"/>
                                        <div className="input-group-append">
                                            <button className="input-group-text">+</button>
                                        </div>
                                    </div>
                                    }
                                    <table className="table table-striped table-responsive-sm text-muted">
                                        <tbody>
                                        {packItems}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // {/*<section className="left">*/}
            // {/*    <h1>Packs</h1>*/}
            // {/*    <input type="text" value={this.state.newPack}*/}
            // {/*           onChange= {(event) =>*/}
            // {/*           {this.setState({newPack: event.target.value})}*/}
            // {/*           }/>*/}
            // {/*    <button onClick={this.addPack}>Create a new pack</button>*/}
            // {/*    {packs}*/}
            // {/*</section>*/}
            // {/*<section className="left">*/}
            // {/*    <h1>Packing Items {this.state.selectedPack.name}</h1>*/}
            // {/*    {packItems}*/}
            // {/*</section>*/}
        );
    }
}

export default Packs;