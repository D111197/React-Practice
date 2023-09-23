import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id : "heading"}, "Hello world by react!");

// nested React Element

const parent =  React.createElement("div", {id : "parent"}, 
React.createElement("div", {id : "Child"}, [
React.createElement("h1", {}, "I am an HTmlTag"),
React.createElement("h2", {}, "I am an HTmlTag") ]),
React.createElement("div", {id : "parent"}, 
React.createElement("div", {id : "Child"}, [
React.createElement("h1", {}, "I am an HTmlTag"),
React.createElement("h2", {}, "I am an HTmlTag") ])))

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
