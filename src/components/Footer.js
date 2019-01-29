import React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer>
        <div className="bg-blue-darker text-white">
        <div className="px-4 pt-8 pb-4 ">
          <svg
            className="h-12 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 249.23 73.52"
          >
            <title>rndr_logo</title>
            <circle cx="29.46" cy="16.94" r="6.48" fill="#2779bd" />
            <circle cx="40.31" cy="30.41" r="5.83" fill="#2779bd" />
            <circle cx="37.61" cy="45.36" r="5.19" fill="#2779bd" />
            <circle cx="26.8" cy="53.08" r="4.54" fill="#2779bd" />
            <circle cx="14.52" cy="52.35" r="3.89" fill="#2779bd" />
            <circle cx="5.78" cy="44.76" r="3.24" fill="#2779bd" />
            <circle cx="2.59" cy="34.88" r="2.59" fill="#2779bd" />
            <circle cx="4.59" cy="26.29" r="1.94" fill="#2779bd" />
            <text x="-2.3" y="9.57" />
            <path
              d="M62.07,15.79h8.55V20H71a6.57,6.57,0,0,1,6.41-4.58,9.77,9.77,0,0,1,2.56.24v7.24a11.67,11.67,0,0,0-3.11-.32c-4.37,0-6,2.53-6,6.34V44.22H62.07Z"
              transform="translate(-2.3 9.57)"
            />
            <path
              d="M84.22,15.79H92.5v4.42h.4c.8-2.05,3.38-4.85,8.23-4.85,5.72,0,9.56,3.57,9.56,10.52V44.22h-8.52V27.87c0-4.1-2.35-5.4-4.66-5.4-2.88,0-4.77,2.08-4.77,5.51V44.22H84.22Z"
              transform="translate(-2.3 9.57)"
            />
            <path
              d="M134.14,20.1h.37V6h8.55V44.22h-8.5V39.75h-.34c-1.23,2.93-4.18,4.77-8.1,4.77-6.63,0-10.57-5-10.57-13.4V28.83c0-8.36,4-13.36,10.57-13.36C130,15.47,133,17.33,134.14,20.1Zm-9.8,9v1.81c0,4.71,2.13,7,5,7,3.09,0,5.17-2.37,5.17-7V29.1c0-4.5-2.11-7-5.19-7C126.47,22.1,124.34,24.41,124.34,29.1Z"
              transform="translate(-2.3 9.57)"
            />
            <path
              d="M149.36,15.79h8.55V20h.4a6.58,6.58,0,0,1,6.42-4.58,9.74,9.74,0,0,1,2.55.24v7.24a11.67,11.67,0,0,0-3.11-.32c-4.37,0-6,2.53-6,6.34V44.22h-8.79Z"
              transform="translate(-2.3 9.57)"
            />
          </svg>
          </div>

          <div className="px-4 pb-8 grid grid-columns-2">
            <div className="pb-4">
              <h4 className="footer-head">Company</h4>
              <ul className="list-reset">
                <li>
                  <Link className="footer-links">Work</Link>
                </li>
                <li>
                  <Link className="footer-links">Services</Link>
                </li>
                <li>
                  <Link className="footer-links">Articles</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-head">Contact</h4>
              <ul className="list-reset">
                <li>
                  <Link className="footer-links">Email</Link>
                </li>
                <li>
                  <Link className="footer-links">Phone</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
