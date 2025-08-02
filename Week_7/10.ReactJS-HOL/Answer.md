
# React and JSX Basics

## 1. Define JSX

JSX (JavaScript XML) is a syntax extension for JavaScript used in React.  
It allows you to write HTML-like tags directly inside JavaScript code to describe the UI.

Example:
```jsx
const element = <h1>Hello, World!</h1>;
````

JSX is **not valid JavaScript** on its own — it gets compiled into `React.createElement()` calls.

---

## 2. Explain ECMAScript

ECMAScript (often abbreviated as **ES**) is the official standard for JavaScript defined by **ECMA International**.

* **ES5** introduced strict mode, JSON support, etc.
* **ES6 (ECMAScript 2015)** introduced `let`, `const`, arrow functions, classes, template literals, destructuring, promises, etc.
* React heavily relies on ES6+ features for clean, modern syntax.

---

## 3. Explain `React.createElement()`

`React.createElement()` is the function that JSX compiles to.
It creates and returns a React element (i.e., a virtual DOM node).

Example:

```js
const element = React.createElement('h1', null, 'Hello, World!');
```

This is equivalent to:

```jsx
const element = <h1>Hello, World!</h1>;
```

---

## 4. How to Create React Nodes with JSX

React nodes (or elements) can be created directly using JSX by embedding tags into JS:

Example:

```jsx
const element = <div><p>Welcome</p></div>;
```

You can also use props, variables, and nested JSX to build more dynamic nodes.

---

## 5. How to Render JSX to DOM

In a React application (usually bootstrapped by Create React App), rendering is done using:

```js
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1>Hello, JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```

This inserts the element into the real DOM inside the div with `id="root"`.

---

## 6. How to Use JavaScript Expressions in JSX

JavaScript expressions can be embedded inside JSX using `{}`.

Example:

```jsx
const name = "Projita";
const element = <h1>Hello, {name}!</h1>;
```

You can use:

* Variables
* Function calls
* Ternary operators
* Expressions like `{1 + 1}`

Note: **Statements** like `if`, `for`, etc., are not allowed directly inside JSX.

---

## 7. How to Use Inline CSS in JSX

You can style JSX elements using the `style` attribute, which takes a **JavaScript object**.

Example:

```jsx
const headingStyle = {
  color: "blue",
  fontSize: "20px"
};

const element = <h1 style={headingStyle}>Hello Styled JSX</h1>;
```

For **conditional styling**, you can use class names:

```jsx
const rent = 55000;
const className = rent < 60000 ? "textRed" : "textGreen";

<h3 className={className}>Rent: ₹{rent}</h3>
```

---
## Output
![Output](Output/React_Output.png)