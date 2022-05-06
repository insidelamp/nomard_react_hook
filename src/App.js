import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UpDown_Button from "./pages/UpDown_Button";
import useInput from "./pages/useInput";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/updown" exact component={UpDown_Button} />
        <Route path="/input" exact component={useInput} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
