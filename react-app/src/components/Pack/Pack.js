import React from "react";
import './Pack.css';

const Pack = (props) => {
    return (
        <div className="Pack">
            <p> <span onClick={props.click}>{props.name}</span> &nbsp;
                <a href="#" onClick={props.remove}>remove</a></p>
        </div>
    );
};

export default Pack;