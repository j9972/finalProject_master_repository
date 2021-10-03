import "./CSSFILE/App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Home_js/Login";
import Home from "./pages/Home";

// import { useHistory } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
