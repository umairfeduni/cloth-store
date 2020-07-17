import React from "react";
import { Switch, Route } from "react-router-dom";

//import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

const HatsPage = () => (
  <div>
    <h1>Hats page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}
export default App;
