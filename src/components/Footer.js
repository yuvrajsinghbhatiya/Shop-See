import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
// import { LuPhoneCall, LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <footer class="relative bg-primary pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
          <h4 className="font-sans text-2xl font-semibold leading-snug mb-2 text-white tracking-wide">
              SHOP SEE
            </h4>
            <p className="text-md mt-0 mb-2 text-footerlink w-2/3">
              A new experience in shopping online. We are here to help you find
              the best products for you.
            </p>
            <div class="mt-6 lg:mb-0 mb-6 flex space-x-4">
              <a
                href="https://www.twitter.com/creativetim?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter
                  className="text-white hover:text-fadeCustom"
                  size={24}
                />
              </a>
              <a
                href="https://www.facebook.com/creativetim?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook
                  className="text-white hover:text-fadeCustom"
                  size={24}
                />
              </a>
              <a
                href="https://www.instagram.com/example"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  className="text-white hover:text-fadeCustom"
                  size={24}
                />
              </a>
            </div>
          </div>
          <div class="w-full lg:w-6/12">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-white text-md font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-white text-md font-semibold mb-2">
                  Online Shop
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      Men
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Women
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-footerlink hover:text-fadeCustom font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Kids
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 w-2/3 m-auto border-1 border-white" />

        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-md py-1 font-normal text-footerlink">
            Copyright © 2023 Shop-See.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
