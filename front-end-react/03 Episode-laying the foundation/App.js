import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1>This is React JSX</h1>;

// functional component
const HeadingComponent = () => (
  <div>
    {Heading()}
    <Heading />
    <Heading></Heading>
    <h1>This is React functional component</h1>
  </div>
);

// {Heading()}
// <Heading/>
// <Heading></Heading> can access like this 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
