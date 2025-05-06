import React from "react";
import InfinityScroller from "../Footer/InfinityScroller";

const Footer = () => {
  return (
    <div>
      <div
        className="w-full h-[80vh] "
        style={{
          clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        }}
      >
        <div className="w-full h-[80vh] fixed bottom-0 bg-pink-300">
          <footer className="bg-neutral-900 text-neutral-300 h-full px-4 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Socials */}
            <div className="md:col-start-1 md:col-end-4 flex flex-col gap-4">
              <h2 className="text-xl md:text-3xl font-semibold">Infrawave</h2>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <a key={i} href="#">
                    <div className="w-8 h-8 bg-neutral-700 flex items-center justify-center rounded">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="md:col-start-9 md:col-end-11 flex flex-col gap-2 text-sm md:text-base">
              {["Technology", "Company", "Shop", "Commercial", "Blog", "Contact"].map((item, i) => (
                <a key={i} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div>

            <div className="md:col-start-11 md:col-end-13 flex flex-col gap-2 text-sm md:text-base">
              {[
                "Shipping & Delivery",
                "Privacy Policy",
                "Revocation",
                "Terms & Conditions",
                "Imprint",
                "Press kit",
              ].map((item, i) => (
                <a key={i} href="#" className="hover:underline">
                  {item}
                </a>
              ))}
            </div>

            {/* Description */}
            <div className="md:col-start-1 md:col-end-7 mt-4 text-xs md:text-sm leading-snug">
              <p>
                Infrawave Solutions empowers businesses through cutting-edge digital services, including web and mobile development, AI/ML solutions, blockchain integration, and innovative technologies for seamless digital transformation.
              </p>
            </div>

            {/* Brands */}
            <div className="md:col-start-1 md:col-end-13 flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <InfinityScroller />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
