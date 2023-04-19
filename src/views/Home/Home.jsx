import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

const Home = () => {
  return (
    <section>
      <Header />
      <Nav />
      <Card />
      <Footer />
    </section>
  );
};

export default Home;
