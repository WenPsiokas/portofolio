import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCarousel from "./HeroCarousel";
import Brick from "./Brick";
import FiftyFifty from "../containers/FiftyFifty";

const App = () => {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #000000 }"}</style>
      </Helmet>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <Route path="/" exact component={HeroCarousel} />
        <Route path="/" exact component={Brick} />
        <Route path="/" exact component={FiftyFifty} />
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
