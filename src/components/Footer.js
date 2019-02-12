import React from "react";
import { Link } from "gatsby";
import { Logo } from "./Svg";
import Social from "./Social";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="bg-blue-darkest text-white">
          <div className="px-8 pt-8 grid grid-columns-2 md:grid-columns-4">
            <div className="md:order-0 md:flex md:flex-col">
              <Logo classes="text-white" layout="items-center"/>
              <div className="hidden md:block md:pt-3">
                <ul className="list-reset text-sm">
                  <li className="footer-links">@2019 rndr.tech</li>
                  <li className="footer-links">Privacy & Policy</li>
                </ul>
              </div>
            </div>

            <div className="pt-2 md:order-3 md:pt-4">
              <h4 className="footer-head hidden md:block">Social</h4>
              <Social classes="h-8 flex items-center" />
            </div>
            
            <div className="pt-4 md:order-1">
              <h4 className="footer-head">Company</h4>
              <ul className="list-reset">
                <li>
                  <Link to="work" className="footer-links">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="services" className="footer-links">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="articles" className="footer-links">
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:order-2">
              <h4 className="footer-head">RESOURCES</h4>
              <ul className="list-reset">
                <li>
                  <Link to="contact" className="footer-links">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="email" className="footer-links">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 py-8 md:text-center">
            <p className="text-xs text-grey-dark font-robot tracking-normal">
              Made with
              <span>
                <svg
                  className="fill-current h-3 px-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </span>
              currently in Dallas, TX
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
