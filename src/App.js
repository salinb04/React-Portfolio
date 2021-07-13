import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationWithRouter from "./components/navigation/Navigation";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
    <Router>
      <NavigationWithRouter />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
