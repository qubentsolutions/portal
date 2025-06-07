import Footer1 from "@/components/footers/Footer1";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export const metadata = {
  title:
    "Qubent Solutions – Intent-Driven IT | Design with Empathy, Code with Clarity",
  description:
    "Qubent Solutions blends user-centered design with clean, scalable code to deliver IT solutions that are as thoughtful as they are powerful. Design with empathy, code with clarity.",
};
export default function PrivacyPolicy() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <>
            <nav className="main-nav dark light-after-scroll transparent stick-fixed wow-menubar wch-unset">
              <div className="main-nav-sub full-wrapper">
                {/* Logo  (* Add your text or image to the link tag. Use SVG or PNG image format. 
              If you use a PNG logo image, the image resolution must be equal 200% of the visible logo
              image size for support of retina screens. See details in the template documentation. *) */}
                <div className="nav-logo-wrap local-scroll">
                  <Link href={`/`} className="logo">
                    <Image
                      src="/assets/images/logo-white.svg"
                      alt="Your Company Logo"
                      width={150}
                      height={60}
                      className="logo-white"
                    />
                    <Image
                      src="/assets/images/logo-dark.svg"
                      alt="Your Company Logo"
                      width={150}
                      height={60}
                      className="logo-dark"
                    />
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="mobile-nav" role="button" tabIndex={0}>
                  <i className="mobile-nav-icon" />
                  <span className="visually-hidden">Menu</span>
                </div>
                {/* Main Menu */}
                <div className="inner-nav desktop-nav">
                  <ul className="clearlist scroll-nav local-scroll justify-content-end">
                    <li className="active">
                      <a href="mailto:info@qubentsolutions.com" className="">
                        <i className="mi-email align-center me-1" />
                        info@qubentsolutions.com
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="mi-call align-center" /> +91 95371 46125
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Main Menu */}
              </div>
            </nav>
            {/* End Navigation Panel */}
            <main id="main">
              {/* Home Section */}
             <section>
              <h3>Privacy Policy</h3>
              <p>
                At Qubent Solutions, we are committed to protecting your privacy.
                This Privacy Policy outlines how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>
              <h4>Information We Collect</h4>
              <p>
                We may collect personal information such as your name, email address,
                phone number, and any other information you provide when you contact us
                or use our services. We also collect non-personal information such as
                browser type, IP address, and pages visited on our website.
              </p>
              <h4>How We Use Your Information</h4>
              <p>
                We use the information we collect to:
                <ul>
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you updates, newsletters, and promotional materials</li>
                  <li>Analyze website usage and trends</li>
                </ul>
              </p>
              <h4>Data Security</h4>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal information from unauthorized access, disclosure, alteration,
                or destruction. However, no method of transmission over the internet or
                electronic storage is 100% secure, and we cannot guarantee its absolute
                security.
              </p>
              <h4>Cookies</h4>
              <p>
                Our website uses cookies to enhance your browsing experience. Cookies are
                small text files stored on your device that help us analyze website traffic
                and improve our services. You can choose to accept or decline cookies through
                your browser settings.
              </p>
              <h4>Third-Party Links</h4>
              <p>
                Our website may contain links to third-party websites. We do not control
                these websites and are not responsible for their content or privacy practices.
                We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
              <h4>Changes to This Privacy Policy</h4>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be
                posted on this page with an updated effective date. We encourage you to review
                this Privacy Policy periodically for any changes.
              </p>
              <h4>Contact Us</h4>
              <p>
                If you have any questions or concerns about this Privacy Policy or our
                data practices, please contact us at:
                <br />
                <a href="mailto:info@qubentsolutions.com">info@qubentsolutions.com</a>
              </p>
              <p>
                By using our website, you consent to the collection and use of your
                information as described in this Privacy Policy.
              </p>
            </section>
              {/* End Privacy Policy Section */}
              <section>
                <h3>Last Updated</h3>
                <p>
                  This Privacy Policy was last updated on 07 Jun, 2025. Please check back
                  periodically for updates.
                </p>
              </section>
              {/* End Home Section */}
            </main>
          </>

          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
