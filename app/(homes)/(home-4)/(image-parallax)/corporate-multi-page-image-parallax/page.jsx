import Footer3 from "@/components/footers/Footer3";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1 from "@/components/homes/home-4/heros/Hero1";
import Hero2 from "@/components/homes/home-4/heros/Hero2";
import { corporateMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Home 4 Image Parallax MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home4ImageParallaxMultiPage() {
  return (
    <>
      <div className="theme-corporate">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header4 links={corporateMultipage} />
            </nav>
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-corporate/section-bg-5.jpg)",
              }}
              id="home"
            >
              <Hero2 />
            </ParallaxContainer>

            <Home4 />
          </main>
          <footer className="footer-2 pb-50">
            <Footer4 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
