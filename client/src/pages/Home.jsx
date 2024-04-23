import React from "react";
import {
  AboutCard,
  HomeCard,
  PorfolioCard,
  SkillSection,
} from "../components/index.js";

function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <PorfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillSection />
    </div>
  );
}

export default Home;
