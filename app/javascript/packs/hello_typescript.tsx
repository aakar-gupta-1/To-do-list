import * as React from "react";
import * as ReactDOM from "react-dom";
import HelloNinja from "../components/hello_ninja";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <HelloNinja />,
    document.body.appendChild(document.createElement("div"))
  );
});
