import React from 'react';
import { thanksFields } from './thanksFields';
import "./styles.css";

function Thanks() {
    return ( 
        <div className="thanks-container">
            <div className="thanks-image">
                <img src={thanksFields.img} alt="thanksimage"></img>
            </div>
            <div className="thanks-heading">
                <h1>{thanksFields.heading}</h1>
            </div>
            <div className="thanks-description">
                <p>{thanksFields.description}</p>
            </div>

        </div>
     );
}

export default Thanks;