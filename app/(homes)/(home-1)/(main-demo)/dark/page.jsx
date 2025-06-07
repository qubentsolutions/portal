import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { menuItemsDark } from "@/data/menu";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Qubent Solutions – Intent-Driven IT | Design with Empathy, Code with Clarity",
  description:
    "Qubent Solutions blends user-centered design with clean, scalable code to deliver IT solutions that are as thoughtful as they are powerful. Design with empathy, code with clarity.          ",
};
export default function Home1MainDemoOnepageDark() {
  return (
    <>
      {" "}
      <div className="theme-main">
        <div className="dark-mode">
          {" "}
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header1 links={menuItemsDark} />
            </nav>{" "}
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5 parallax-mousemove-scene scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-1.jpg)",
                }}
                id="home"
              >
                <Hero1 />
              </ParallaxContainer>
              <Home1 onePage dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
