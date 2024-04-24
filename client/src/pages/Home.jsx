import React from "react";
import {
  AboutCard,
  HomeCard,
  PorfolioCard,
  SkillSection,
  ProjectSection,
  ContactSection,
} from "../components/index.js";

function Home() {
  return (
    <div className="w-[80vw] mx-auto">
      <PorfolioCard />
      <HomeCard />
      <AboutCard />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default Home;
