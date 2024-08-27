import React from 'react';
import Form from "./Forms/Form"
import Sidebar from './Sidebar/Sidebar';
import "../styles/styles.css"

function App() {
    return ( 
        <div className="app">
            <div className="main">
                <Sidebar/>
                <Form/>
            </div>
        </div>
     );
}

export default App;