import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", {
    className: "heading",
    id: "heading"
}, "Hello React!");
console.log(h1);
const parent = ReactDOM.createRoot(document.getElementById("parent"));
console.log(parent);
parent.render(h1);

/* <div>
    <div>
        <h1>Hi Guys!</h1>
        <h2>Hi Guys!</h2>
    </div>
    <div>
        <h1>Hi Guys!</h1>
        <h2>Hi Guys!</h2>
    </div>
</div> */

//Nested React Element
const Parent = React.createElement("div", { id: 'parent' },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading1" }, "Hi Guys!"),
        React.createElement("h2", { id: "heading1" }, "Jailer 2 chusesanu bhayya,..")])
    , 
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heading1" }, "Hi Guys!"),
        React.createElement("h2", { id: "heading1" }, "Jailer 2 chusesanu bhayya,..")])
);

parent.render(Parent);