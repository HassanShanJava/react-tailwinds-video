import React from "react";
import Destinations from "./components/Destinations";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
    </div>
  );
}

export default App;
