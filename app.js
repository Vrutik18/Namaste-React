import React from "react"
import ReactDOM from "react-dom"

const Heading = React.createElement("h1","{}","Namaste React")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading)

   // const heading = document.getElementById("root");
    // heading.innerHTML = "Namaste React";

    // create h1 inside div(Nested)
    // const h1 = document.createElement('h1')
    // h1.innerHTML = "Namaste React";

    // process of inputting in div
    // const root = document.getElementById("root");
    // root.appendChild(h1);

    // using REACT