import React from 'react';
import Navbar from "./Navbar/NavBar";
import Home from "./Routes/Home/Home";
import Create from "./Routes/Create/Create.js";
import BlogDetails from "./Routes/BlogDetails/BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './Routes/NotFound/NotFound';

function App() {
  return (
   <Router>
     <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  );
}

export default App;
