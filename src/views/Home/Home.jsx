import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";

const Home = () => {
  return (
    <section>
      <Header />
      
        <Nav />
      
    </section>
  );
};

export default Home;
