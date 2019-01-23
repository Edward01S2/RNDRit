import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnClick: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      btnClick: !state.btnClick
    }));
  }

  render() {
    const menuBtn = this.state.btnClick;
    return (
      <nav
        className="navbar flex items-center justify-between flex-wrap"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="flex items-center flex-no-shrink text-black pt-2 pl-4">
          <svg
            className="h-12"
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
            <path
              d="M172.9,35.25A4.79,4.79,0,1,1,168.1,40,4.81,4.81,0,0,1,172.9,35.25Z"
              transform="translate(-2.3 9.57)"
            />
            <path
              d="M187.38,5.85a3.35,3.35,0,1,1-3.52,3.36A3.38,3.38,0,0,1,187.38,5.85Zm-3,10.23h5.91V44.22h-5.91Z"
              transform="translate(-2.3 9.57)"
            />
            <path
              d="M200,9.24h5.8v6.84h5.49v4.74h-5.49v15c0,3.07,1.15,3.92,4.32,3.92a10.56,10.56,0,0,0,1.33,0v4.52a19.71,19.71,0,0,1-2.8.19c-6.84,0-8.73-2.45-8.73-8.1V20.82H196V16.08h4Z"
              transform="translate(-2.3 9.57)"
            />
          </svg>
        </div>
        <div className="block pin-t pin-r absolute md:hidden">
          <button
            onClick={this.handleClick}
            className="navbar-burger flex items-center px-6 py-5 bg-grey-lightest border-none focus:outline-none"
            data-target="navMenu"
          >
            {menuBtn ? (
              <svg
                className="fill-current h-4 w-4 font-grey-darker"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Menu</title>
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-4 w-4 font-grey-darker"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            )}
          </button>
        </div>
        <div
          id="navMenu"
          className={
            "w-full flex-grow md:flex md:items-center md:w-auto " +
            (menuBtn ? "block" : "hidden")
          }
        >
          <div className="text-lg md:flex-grow text-center bg-grey-lightest font-open py-8 sm:bg-white">
            <Link
              to="/about"
              className="nav-item block text-grey-darker sm:inline-block sm:mt-0 sm:mr-4 no-underline"
            >
              services
            </Link>
            <Link
              to="/blog"
              className="nav-item block mt-8 text-grey-darker sm:inline-block sm:mt-0 sm:mr-4 no-underline"
            >
              work
            </Link>
            <Link
              to="/contact"
              className="nav-item block mt-8 text-grey-darker sm:inline-block sm:mt-0 no-underline"
            >
              let's talk
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
