import React from "react";
import { Link } from "gatsby";
import {Logo} from './Svg';
import Social from './Social';

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="bg-blue-darker text-white">
          <div className="px-8 pt-8 pb-6 grid grid-columns-2">

            <div className="">
              <div className="pb-4">
                  <Logo classes='text-white'/>
                </div>
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

              <div>
                <Social classes="h-12 pt-2 flex items-center" />

                <h4 className="footer-head">RESOURCES</h4>
                <ul className="list-reset">
                  <li>
                    <Link to="contact" className="footer-links">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="email" className="footer-links">
                      hey@rndr.tech
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pl-8 pb-8">
              <p className="text-xs text-grey-dark font-robot tracking-normal flex items-center">
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
                in Dallas, TX
              </p>
            </div>
          </div>

      </footer>
    );
  }
};

export default Footer;
