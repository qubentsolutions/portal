import Footer1 from "@/components/footers/Footer1";
import Home1 from "@/components/homes/home-1";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

// export const metadata = {
//   title:
//     "Preview Page || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
//   description:
//     "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
// };

export const metadata = {
  title:
    "Home 1 Main Demo MultiPage || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default function Home() {
  return <div className="theme-main">
    <div className="page" id="top">
      <nav className="main-nav transparent stick-fixed wow-menubar">
        <Header1Multipage links={menuItems} />
      </nav>
      <main id="main">
        <ParallaxContainer
          className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
          style={{
            backgroundImage:
              "url(/assets/images/full-width-images/section-bg-1.jpg)",
          }}
          id="home"
        >
          <Hero1 />
        </ParallaxContainer>
        <Home1 />
      </main>
      <Footer1 />
    </div>{" "}
  </div>
}

// export default function Home1() {
//   return (
//     <>
//       <div className="theme-main">
//         <div className="page" id="top">
//           {/* Navigation Panel */}
//           <nav className="main-nav transparent stick-fixed wow-menubar">
//             <HeaderPreview />
//           </nav>
//           {/* End Navigation Panel */}
//           <main id="main">
//             {/* Home Section */}
//             <ParallaxContainer
//               className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
//               style={{
//                 backgroundImage:
//                   "url(/assets/images/full-width-images/section-bg-1.jpg)",
//               }}
//               id="home"
//             >
//               <Hero />
//             </ParallaxContainer>
//             {/* End Home Section */}
//             {/* Showcases Section */}
//             <section className="full-wrapper mt-n90">
//               <Showcase />
//             </section>
//             {/* End Showcases Section */}
//             {/* Multi Page Demos Section */}
//             <section className="page-section overflow-hidden" id="multi-page">
//               <Multipage />
//             </section>
//             {/* End Multi Page Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* One Page Demos Section */}
//             <section className="page-section overflow-hidden" id="one-page">
//               <Onepage />
//             </section>
//             {/* End One Page Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* Intro Sections Demos Section */}
//             <section
//               className="page-section overflow-hidden"
//               id="intro-sections"
//             >
//               <Intro />
//             </section>
//             {/* End Intro Sections Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* Testimonials Section */}
//             <section className="page-section">
//               <Testomonials />
//             </section>
//             {/* End Testimonials Section */}
//           </main>
//           {/* Footer */}
//           <footer className="page-section footer bg-gray-light-1 pb-30">
//             <FooterPreview />
//           </footer>
//           {/* End Footer */}
//         </div>
//       </div>
//     </>
//   );
// }
