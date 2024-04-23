import React from "react";
import { HomeCard, PorfolioCard } from "../components/index.js";

function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <PorfolioCard />
      <HomeCard />
    </div>
  );
}

export default Home;
