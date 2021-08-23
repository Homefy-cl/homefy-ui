import React from "react";
import ReactDOM from "react-dom";
import "index.css";

import Routing from "utils/Routing/Routing";

const App = () => {
  return (
    <>
      <Routing />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
