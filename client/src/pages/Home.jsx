import React from "react";
import { AboutCard, HomeCard, PorfolioCard } from "../components/index.js";

function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <PorfolioCard />
      <HomeCard />
      <AboutCard />
    </div>
  );
}

export default Home;
