import React from "react";
import ReactDOM from "react-dom/client";

//>> This is How we build things without JSX.

//>> React.createElement >> It returns just an Object >> When we render it to DOM it becomes >> HTML Element.
// const heading = React.createElement("h1", {className: "heading", name:"headingName", id: "headingId"}, "This is React Episode 3");
// console.log(heading);

// >> ReactDOM.createRoot >> It also returns on Object.
// const parent = ReactDOM.createRoot(document.getElementById('parent'));
// parent.render(heading);

//>> Now with JSX life became easier.Facebook Developers introduced JSX to avoid above difficult coding.
//>> JSX >> Javascript XML
//>> JSX Allows to write the html like syntax in JS code.
//>> In a .js file we can't directly put the html code which results the Error.But here it works well..
//>> Js Engine understands only ECMA-Script syntax then how come it understands the JSX Syntax???
//>> This happens because we have Babel which a Transpiler(Javascript Compiler).It is JSX syntax in Javascript code.
//>> Babel can only converts the modern javascript syntax into old javascript syntax(Which is for Older Browsers).
//>> Babel is not only the Transpiler there are other tools. 
//>> We installed Parcel and Parcel injected the Babel for us..(This is Transitive Dependency) which means a dependency that depends on other dependecies.
//>> JSX internally converts the 'jsxHeading' into the React.createElement() only.
//>> Babel site : babeljs.io
//>> In JSX for the element attribues we should use camel case Ex: className for class, tabIndex for tabindex etc.
// const jsxHeading = <h1> This is Ashok </h1>;
// console.log(jsxHeading);
// const parent1 = ReactDOM.createRoot(document.getElementById('parent'));
// parent1.render(jsxHeading);

//>> Ex:2
// const jsxHeading2 = ( <h2>I'm learning React</h2>,
//     <p>In the Namesthe React</p>
// );
// const parent2 = ReactDOM.createRoot(document.getElementById('parent'));
// parent2.render(jsxHeading2);

//>> Output:
//>> In the Namasthe React.

//>> Why beacuse in Javascipt we can use the ',' operator to separate the values and it returns the last value. So here it returns the <p>In the Namesthe React</p>.
//>> To avoid this we can use the React.Fragment or <></> to wrap the multiple elements in JSX.

// const jsxHeading2 = (
//     <div>
//         <h2>I'm learning React</h2>
//         <p>In the Namaste React</p>
//     </div>
// );

// const parent1 = ReactDOM.createRoot(document.getElementById('parent'));

// parent1.render(jsxHeading2);

//************************ OR ***********************

// const jsxHeading2 = (
//     <>
//         <h2>I'm learning React</h2>
//         <p>In the Namaste React</p>
//     </>
// );

// const parent1 = ReactDOM.createRoot(document.getElementById('parent'));

// parent1.render(jsxHeading2);

//>> Next React Component:
//>> What is React Component?
//1. Class Based Component -- Old way of writing the React Component.
//2. Functional Based Component -- New way of writing the React Component.
//>> React Component is a function which returns the JSX code.
const HeadingNormalElement = <h1>This is an example of normal React Element</h1>;

//>> Even if the data is coming from API(Consider it is sending malicious data) we can use it in JSX because JSX is just a syntactic sugar for React.createElement() and React.createElement() is a function which returns the Object and it is not directly rendered to DOM. 
//>> So it is safe to use the data from API in JSX. 
//const dataFromApi = api.getData(); 
const HeadingFunctionalComponent = function (number, text) {
    return <div>{number + text} + {HeadingNormalElement}
    <TitleComponent/>
        <h1>This is an example of functional component</h1>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(HeadingFunctionalComponent(2779, "hi guys"));

//>> How to use the React Component in another React Component? >> This is called Component Composition. We can use the React Component in another React Component by using the JSX syntax like <ComponentName />.
const TitleComponent = () => {
    return <h2>This is Title</h2>;
}
root.render(HeadingFunctionalComponent(2779, "hi guys"));
