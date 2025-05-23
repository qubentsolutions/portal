import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";

import { mainDemoOnepage } from "@/data/menu";
import Hero6 from "@/components/homes/home-1/heros/Hero6";
import Footer1 from "@/components/footers/Footer1";

export const metadata = {
  title:
    "Home 1 BG Video Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home1BGVideoOnepageDark() {
  return (
    <>
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header1 links={mainDemoOnepage} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-90 light-content parallax-5 parallax-mousemove-scene scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-2.jpg)",
                }}
                id="home"
              >
                <Hero6 />
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
