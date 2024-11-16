import React from "react";
import ReactDOM from 'react-dom/client'

function ReactJS() {
    const myElement = React.createElement('h1', {}, 'I do not use JSX!');
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    return (
        <>
            {root.render(myElement)}
        </>
    )
}

export default ReactJS