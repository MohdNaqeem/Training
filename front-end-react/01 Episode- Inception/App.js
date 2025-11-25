// hello world program in js
let heading = document.createElement("h1");
heading.innerText = "Hello world from javascript !";

let root = document.getElementById("root");
root.appendChild(heading);

// hello world program in react
let heading2 = React.createElement(
  "h1",
  { id: "showHeading" },
  "Hello world from React!"
);
let data = ReactDOM.createRoot(document.getElementById("rootData"));
data.render(heading2);

// how to create nested element in react

let nestedEl = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an H1 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h2", {}, "I am an H2 tag"),
  ]),
]);

let printEl = ReactDOM.createRoot(document.getElementById("nested"))
printEl.render(nestedEl)
