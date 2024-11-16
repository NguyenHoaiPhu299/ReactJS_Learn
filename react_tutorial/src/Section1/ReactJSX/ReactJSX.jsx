import React from "react";
import ReactDOM from 'react-dom/client'

function ReactJSX() {
    const myElement = <h1>I Love JSX!</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    

    return (
        <>
            {root.render(myElement)}
        </>
    )
}

export default ReactJSX;