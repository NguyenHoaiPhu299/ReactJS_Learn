import React from "react";
import ReactDOM from "react-dom/client"

function Expressions() {
    const myElement = (
        <>
            <h1>React is {5 + 5} times better with JSX</h1>
            <h1>React is {5 + 5} times better with JSX</h1>
        </>
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    return (
        <>
            {root.render(myElement)}
        </>
    )
}

export default Expressions;