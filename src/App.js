import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavigationWithRouter from "./components/navigation/Navigation";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <HashRouter>
        <NavigationWithRouter />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
