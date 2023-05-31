import "./App.css";
import { Switch, Route, Router } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Change from "./components/change/Change";
import Navbar from "./components/navbar/Navbar";
import NoFound from "./components/notfound/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={Change} />
          <Route path="*" component={NoFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
