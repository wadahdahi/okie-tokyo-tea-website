import React from "react";
import Hero from "../components/home/Hero/Hero";
import Features from "../components/home/Features/Features";
import Reviews from "../components/home/Reviews/Reviews";
import FAQ from "../components/home/FAQ/FAQ";
import Test from "../components/home/Test/Test";

const Home: React.FC = () => {
  return (
    <div className="home-page overflow-x-hidden">
      <Test />
      <Hero />
      <Features />
      <Reviews />
      <FAQ />
    </div>
  );
};

export default Home;
