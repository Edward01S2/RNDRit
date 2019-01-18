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
        <div className="flex items-center flex-no-shrink text-black pt-2 pl-3 pb-2">
          <svg className="h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.61 84.48"><title>rndr_logo</title><text transform="translate(0 64.16)" fontSize="75" fontFamily="Roboto-Black, Roboto" fontWeight="800">RNDR</text><text transform="translate(200.03 64.14)" fontSize="50" fontFamily="OpenSans-Bold, Open Sans" fontWeight="700">.it</text></svg>
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
