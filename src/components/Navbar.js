import React from "react";
import { Link } from "gatsby";
import { Logo, Menu, Close } from "./Svg";
import Social from "./Social";

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
          <div className="text-blue pb-2">
            <Logo classes="text-black" />
          </div>
        </div>
        <div className="block pin-t pin-r absolute md:hidden">
          <button
            onClick={this.handleClick}
            className="navbar-burger flex items-center px-6 py-5 bg-grey-lightest border-none focus:outline-none"
            data-target="navMenu"
          >
            {menuBtn ? (
              <Menu classes="fill-current h-4 w-4 font-grey-darker" />
            ) : (
              <Close classes="fill-current h-4 w-4 font-grey-darker" />
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

            <Social classes="flex items-center justify-center mt-8" />
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
