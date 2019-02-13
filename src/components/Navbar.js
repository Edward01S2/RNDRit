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
      <nav role="navigation" aria-label="main-navigation">
        <div className="container mx-auto">
          <div className="flex items-center justify-between flex-wrap md:py-4 md:px-4">
            <div className="flex items-center flex-no-shrink text-black pt-2">
              <div className="text-blue pb-2 pl-4 md:pl-0">
                <Logo classes="text-black lg:text-5xl" layout="items-center" svg="lg:h-10" />
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
                "w-full flex-grow bg-grey-lightest py-6 md:flex md:flex-initial md:items-center md:w-auto md:bg-transparent md:py-0 " +
                (menuBtn ? "block" : "hidden")
              }
            >
              <div className="text-lg flex flex-col text-center md:flex-row md:text-left">
                <Link
                  to="/about"
                  className="nav-item text-grey-darker no-underline mt-6 md:mr-8 md:mt-0 lg:mr-12"
                >
                  services
                </Link>
                <Link
                  to="/blog"
                  className="nav-item block text-grey-darker no-underline mt-6 md:mr-8 md:mt-0 lg:mr-12"
                >
                  work
                </Link>
                <Link
                  to="/contact"
                  className="nav-item block text-grey-darker mt-6 no-underline md:mt-0"
                >
                  let's talk
                </Link>

                <Social classes="flex items-center justify-center my-6 md:hidden" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
