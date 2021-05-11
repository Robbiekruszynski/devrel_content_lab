import React from 'react';
import './Progress.css';


const Progression =(props) => {
    let progression = Object.keys(props.slices).map((spokeKey, i) => (
        <li key={spokeKey}>
            <p>{props.slices[spokeKey].spoke}</p>
        </li>
    ));
    return(
        <div>
            {progression}
        </div>
    );
}

export default Progression;