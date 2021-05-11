import React from 'react';
import './Progress.css';


const Progress =(props) => {
    let progress = Object.keys(props.slices).map((progressKey, i) => (
        <li key={progressKey}>
            <p>{props.slices[progressKey].progress}</p>
        </li>
    ));
    return(
        <div>
            {progress}
        </div>
    );
}

export default Progress;