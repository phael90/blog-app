import React from 'react';
import Navbar from "./Navbar/navBar";
import Home from "./Routes/Home/home";
import Create from "./Create/create.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar />
      <div className="content">
        // switch component makes sure that only one route shows at ant one time(multipy whan not applied)
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
