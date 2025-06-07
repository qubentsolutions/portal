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
export default function TermsAndConditions() {
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
              <h3>Terms & Conditions</h3>
              <p>
                Welcome to Qubent Solutions! By accessing or using our website,
                you agree to comply with and be bound by the following terms and
                conditions. Please read them carefully.
              </p>
              <h4>1. Acceptance of Terms</h4>
              <p>
                By using our website, you confirm that you accept these terms and
                conditions and that you agree to comply with them. If you do not
                agree to these terms, you must not use our site.
              </p>
              <h4>2. Changes to Terms</h4>
              <p>
                We may revise these terms from time to time. The revised terms will
                be posted on this page, and it is your responsibility to check for
                updates. Your continued use of the site after changes are made
                constitutes your acceptance of the new terms.
              </p>
              <h4>3. Intellectual Property</h4>
              <p>
                All content on our website, including text, graphics, logos, and
                images, is the property of Qubent Solutions or its content
                suppliers and is protected by copyright, trademark, and other
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works from any content on our site without
                our express written permission.
              </p>  
              <h4>4. User Conduct</h4>  
              <p>
                You agree to use our website only for lawful purposes and in a way
                that does not infringe the rights of, restrict, or inhibit anyone
                else's use and enjoyment of the site. Prohibited behavior includes
                harassment, spamming, or transmitting harmful content.
              </p>
              <h4>5. Limitation of Liability</h4>
              <p>
                Qubent Solutions will not be liable for any direct, indirect,
                incidental, special, or consequential damages arising from your use
                of our website or services. This includes, but is not limited to,
                loss of data, profits, or business interruption.
              </p>
              <h4>6. Governing Law</h4>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of [Your Country/State]. Any disputes
                arising from these terms will be subject to the exclusive
                jurisdiction of the courts in [Your Jurisdiction].
              </p>
              <h4>7. Contact Us</h4>
              <p>
                If you have any questions or concerns about these terms and
                conditions, please contact us at <a href="mailto:info@qubentsolutions.com">info@qubentsolutions.com</a>.
              </p>  
              <p>
                By using our website, you acknowledge that you have read and
                understood these terms and conditions and agree to be bound by them.
              </p>
              <p>
                Thank you for choosing Qubent Solutions. We look forward to serving
                you!
              </p>
              <p>
                <strong>Effective Date:</strong> 07 Jun, 2025
              </p>
              <p>
                <strong>Last Updated:</strong> 07 Jun, 2025
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
