import React from "react";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";

const Home: React.FC = () => {
  return (
    <div className="home-page overflow-x-hidden">
      <Hero />
      <Features />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;

