import React from "react";
import './Pack.css';

const Pack = (props) => {

    let className = 'list-group-item';
    if(props.isSelected)
        className = 'list-group-item active';
    return (
        <li className={className} onClick={props.select}>
            {props.name}
            {/*{props.isSelected? }*/}
            <a href="#remove" className="float-right" onClick={props.remove}>
                Remove
                {props.isSelected &&
                <div className="float-right offset-right">
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-chevron-right"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </div>}
            </a>
        </li>
    )
};

export default Pack;