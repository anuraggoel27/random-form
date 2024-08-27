import React from 'react';

function FormHeader(props) {
    return (
        <div className="form-header">
            <h1 className="form-title">{props.title}</h1>
            <p className="form-description">{props.description}</p>
        </div>
    );
}

export default FormHeader;