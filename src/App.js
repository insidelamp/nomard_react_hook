import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UpDown_Button from "./pages/UpDown_Button";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/updown" exact component={UpDown_Button} />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
