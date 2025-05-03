import React from "react";
import InfinityScroller from "../Footer/InfinityScroller";
// import ScrollVelocity from "./ScrollVelocity";

const Footer = () => {
  return (
    <div>
      {/* <div className="w-full h-screen bg-transparent"></div> */}
      <div
        className="w-full h-[80vh] "
        style={{ clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)" }}
      >
        <div className="w-full h-[80vh] fixed bottom-0  bg-pink-300 ">
          <footer className="bg-neutral-900 text-neutral-300 h-full px-8 py-12 grid grid-cols-12 gap-8">
            {/* Logo and Socials */}
            <div className="col-start-1 col-end-4 flex flex-col gap-4">
              <div className="text-3xl"><h2>Infrawave</h2></div>
              <div className="flex gap-2">
                {/* Replace # with your social links */}
                <a href="#">
                  <div className="w-8 h-8 bg-neutral-700 flex items-center justify-center rounded">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="w-8 h-8 bg-neutral-700 flex items-center justify-center rounded">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="w-8 h-8 bg-neutral-700 flex items-center justify-center rounded">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
                <a href="#">
                  <div className="w-8 h-8 bg-neutral-700 flex items-center justify-center rounded">
                    <i className="fab fa-instagram"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="col-start-9 col-end-11 flex flex-col gap-2 text-[1vw]">
              <a href="#" className="hover:underline">
                Technology
              </a>
              <a href="#" className="hover:underline">
                Company
              </a>
              <a href="#" className="hover:underline">
                Shop
              </a>
              <a href="#" className="hover:underline">
                Commercial
              </a>
              <a href="#" className="hover:underline">
                Blog
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>

            <div className="col-start-11 col-end-13 flex flex-col gap-2 text-[1vw]">
              <a href="#" className="hover:underline">
                Shipping & Delivery
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Revocation
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Imprint
              </a>
              <a href="#" className="hover:underline">
                Press kit
              </a>
            </div>

            {/* Description */}
            <div className="col-start-1 col-end-7 mt-8 text-sm  text-[0.9vw] leading-none">
              <h4>Infrawave Solutions empowers businesses through cutting-edge
              digital services, including web and mobile development, AI/ML
              solutions, blockchain integration, and innovative technologies for
              seamless digital transformation.</h4>
            </div>

            {/* Brands */}
            <div className="col-start-1 col-end-13 mt-auto flex flex-wrap justify-center items-center gap-8 ">
               <InfinityScroller />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
