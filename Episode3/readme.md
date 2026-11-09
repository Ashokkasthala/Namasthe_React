
# Namaste React 🚀

## Episode 3: JSX and React Components

In this episode, I learned how React elements are created without JSX, how JSX makes React development easier, and how to create and reuse React components.

---

## 1. Creating React Elements Without JSX

Before JSX, we used `React.createElement()` to create React elements.

### Example:

```javascript
const heading = React.createElement(
    "h1",
    {
        className: "heading",
        name: "headingName",
        id: "headingId"
    },
    "This is React Episode 3"
);

console.log(heading);
```

### Important Points:

- `React.createElement()` creates a React Element.
- It returns a JavaScript object (React Element), not an actual HTML element.
- ReactDOM converts the React Element into actual DOM elements when rendered.

### Rendering into the DOM

```javascript
const parent = ReactDOM.createRoot(
    document.getElementById("parent")
);

parent.render(heading);
```

- `ReactDOM.createRoot()` creates a React root.
- `root.render()` renders the React Element inside the specified DOM container.

---

## 2. What is JSX?

**JSX stands for JavaScript XML.**

JSX allows us to write HTML-like syntax inside JavaScript code.

It makes writing React applications easier and more readable compared to using `React.createElement()`.

### Without JSX:

```javascript
const heading = React.createElement(
    "h1",
    {},
    "This is Ashok"
);
```

### With JSX:

```jsx
const heading = <h1>This is Ashok</h1>;
```

Both approaches create a React Element.

### Important Points:

- JSX is not HTML.
- JSX is a syntax extension for JavaScript.
- JavaScript engines cannot directly understand JSX syntax.
- JSX needs to be transformed into regular JavaScript before execution.

---

## 3. What is Babel?

**Babel is a JavaScript compiler (transpiler).**

It transforms modern JavaScript syntax and JSX into JavaScript that browsers can understand.

### Example:

JSX Code:

```jsx
const heading = <h1>This is Ashok</h1>;
```

Babel transforms it approximately into:

```javascript
const heading = React.createElement(
    "h1",
    null,
    "This is Ashok"
);
```

### Important Points:

- Babel converts JSX into JavaScript.
- Babel can also transform modern JavaScript features into compatible JavaScript.
- Parcel automatically handles the required Babel integration in our project.
- Babel website: https://babeljs.io/

---

## 4. What is a Transitive Dependency?

A transitive dependency is a dependency that is required by another dependency in our project.

### Example:

- We install Parcel in our project.
- Parcel internally depends on other packages.
- Those packages may also depend on additional packages.

These indirect dependencies are called **Transitive Dependencies**.

---

## 5. JSX Attributes

In JSX, we generally use camelCase for HTML attributes that correspond to DOM properties.

| HTML Attribute | JSX Attribute |
|---|---|
| `class` | `className` |
| `tabindex` | `tabIndex` |
| `onclick` | `onClick` |
| `onchange` | `onChange` |

### Example:

```jsx
const heading = (
    <h1 className="heading" tabIndex="1">
        This is Ashok
    </h1>
);
```

---

## 6. JSX and Multiple Elements

Consider the following example:

```jsx
const jsxHeading = (
    <h2>I'm learning React</h2>,
    <p>In the Namaste React</p>
);
```

### Output:

Only the paragraph will be rendered.

### Why?

Because JavaScript has a comma operator (`,`) that evaluates multiple expressions and returns the value of the last expression.

Therefore, the above code returns only:

```jsx
<p>In the Namaste React</p>
```

### How to Return Multiple Elements?

We need to wrap multiple JSX elements inside a single parent element.

There are two approaches.

**Approach 1: Using a div**

```jsx
const jsxHeading = (
    <div>
        <h2>I'm learning React</h2>
        <p>In the Namaste React</p>
    </div>
);
```

**Approach 2: Using React Fragment**

```jsx
const jsxHeading = (
    <>
        <h2>I'm learning React</h2>
        <p>In the Namaste React</p>
    </>
);
```

### What is React Fragment?

React Fragment allows us to group multiple elements without adding an unnecessary HTML element to the DOM.

We can use:

```jsx
<React.Fragment>
    <h2>Heading</h2>
    <p>Paragraph</p>
</React.Fragment>
```

Or its shorthand syntax:

```jsx
<>
    <h2>Heading</h2>
    <p>Paragraph</p>
</>
```

---

## 7. What is a React Component?

A React Component is a reusable piece of UI.

Components help us divide a large application into smaller, manageable pieces.

There are two types of React Components:

1. **Class-Based Components** – The older approach of creating components using JavaScript classes.
2. **Functional Components** – The modern approach of creating components using JavaScript functions.

In this episode, I learned about Functional Components.

---

## 8. What is a Functional Component?

A Functional Component is a JavaScript function that returns JSX (or React elements).

### Example:

```jsx
const HeadingFunctionalComponent = function () {
    return (
        <div>
            <h1>This is an example of a functional component</h1>
        </div>
    );
};
```

### Rendering a Functional Component

We can render a functional component using JSX:

```jsx
root.render(<HeadingFunctionalComponent />);
```

**Important:** 

- `<HeadingFunctionalComponent />` is the JSX syntax for using a component.
- React executes the component function and renders the returned JSX.
- Component names should start with an uppercase letter.

---

## 9. React Element vs React Component

### React Element

A React Element is a JavaScript object that describes what should appear on the UI.

```jsx
const HeadingNormalElement = (
    <h1>This is an example of normal React Element</h1>
);
```

### React Component

A React Component is a function or class that returns React Elements.

```jsx
const HeadingFunctionalComponent = function () {
    return (
        <h1>This is an example of functional component</h1>
    );
};
```

### Difference

| React Element | React Component |
|---|---|
| It is a JavaScript object. | It is a function or class. |
| It describes the UI. | It defines how the UI should be created. |
| It is written using JSX or `React.createElement()`. | It can return JSX or React Elements. |
| Example: `<h1>Hello</h1>` | Example: `function Heading() { return <h1>Hello</h1>; }` |

---

## 10. JavaScript Expressions Inside JSX

We can write JavaScript expressions inside JSX using curly braces `{}`.

### Example:

```jsx
const number = 2779;
const text = "hi guys";

const HeadingFunctionalComponent = function () {
    return (
        <div>
            {number + text}
            <h1>This is an example of functional component</h1>
        </div>
    );
};
```

### Output:

```text
2779hi guys
This is an example of functional component
```

We can use JavaScript expressions such as:

- Variables
- Mathematical expressions
- Function calls
- Ternary operators
- Array methods such as `map()`

Note: We cannot directly write JavaScript statements such as `if` or `for` inside JSX expressions.

---

## 11. Using a React Element Inside a Component

We can use an already-created React Element inside another component.

### Example:

```jsx
const HeadingNormalElement = (
    <h1>This is an example of normal React Element</h1>
);

const HeadingFunctionalComponent = function () {
    return (
        <div>
            {HeadingNormalElement}
            <h2>This is an example of functional component</h2>
        </div>
    );
};
```

Here, `HeadingNormalElement` is a React Element object.

We can directly include it inside JSX using curly braces.

---

## 12. Component Composition

**Component Composition** means using one React Component inside another React Component.

It helps us create reusable and maintainable UI structures.

### Example:

```jsx
const TitleComponent = function () {
    return <h2>This is Title</h2>;
};

const HeadingFunctionalComponent = function () {
    return (
        <div>
            <TitleComponent />
            <h1>This is an example of functional component</h1>
        </div>
    );
};
```

### Rendering:

```jsx
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<HeadingFunctionalComponent />);
```

### Output:

```text
This is Title

This is an example of functional component
```

### Important Points:

- We can use one component inside another component.
- Component names must start with an uppercase letter.
- We use JSX syntax `<ComponentName />` to include a component.
- Component Composition improves code reusability and maintainability.

---

## 13. Passing Arguments vs Passing Props

A React Functional Component is a JavaScript function.

However, when React calls a component, it passes props as the first argument.

Example:

```jsx
const HeadingFunctionalComponent = function (props) {
    return (
        <h1>
            {props.number} {props.text}
        </h1>
    );
};
```

Rendering:

```jsx
root.render(
    <HeadingFunctionalComponent
        number={2779}
        text="hi guys"
    />
);
```

Here, React passes the properties as an object:

```javascript
{
    number: 2779,
    text: "hi guys"
}
```

**Note:** Calling a component directly like `HeadingFunctionalComponent(2779, "hi guys")` is not the normal way to render React components. Use JSX and pass props instead.

---

## 14. Key Takeaways

1. `React.createElement()` creates React Element objects.
2. `ReactDOM.createRoot()` creates a React root.
3. `root.render()` renders React Elements or Components.
4. JSX stands for JavaScript XML.
5. JSX makes writing React code easier and more readable.
6. Babel transforms JSX into JavaScript.
7. Parcel handles the build process and Babel integration.
8. React Fragment allows us to group multiple elements without adding an extra DOM node.
9. React Components are reusable pieces of UI.
10. Functional Components are JavaScript functions that return JSX.
11. React Elements are objects, whereas React Components are functions or classes.
12. Component Composition means using one component inside another component.
13. Props are used to pass data from one component to another.

---

## 15. Topics to Revise

- [ ] React.createElement()
- [ ] ReactDOM.createRoot()
- [ ] JSX
- [ ] Babel
- [ ] Transitive Dependencies
- [ ] JSX Attributes
- [ ] JavaScript Comma Operator
- [ ] React Fragment
- [ ] React Elements vs React Components
- [ ] Functional Components
- [ ] JavaScript Expressions in JSX
- [ ] Component Composition
- [ ] Props

---

**Learning Journey:** Namaste React – Episode 3

**Next Goal:** Continue learning React Components and Props.
