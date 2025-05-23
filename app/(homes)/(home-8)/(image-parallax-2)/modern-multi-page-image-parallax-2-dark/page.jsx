import Footer2 from "@/components/footers/Footer2";

import Header8 from "@/components/headers/Header8";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-8/heros/Hero1";
import Hero3 from "@/components/homes/home-8/heros/Hero3";
import { modernMultipageDark } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Home 8 Image Parallax2 MultiPage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home8ImageParallax2MultiPageDark() {
  return (
    <>
      <div className="theme-modern">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipageDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
                id="home"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-modern/section-bg-9.jpg)",
                }}
              >
                <Hero3 />
              </ParallaxContainer>

              <Home8 dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
