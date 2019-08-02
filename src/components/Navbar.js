import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { useSpring, useTransition, animated, config } from "react-spring";

import tw from "tailwind.macro";
import { HamburgerSpinReverse } from "react-animated-burgers";

import { Logo } from "./Svg";
import Social from "./Social";

const navItem = css`
  ${tw`px-4 py-6 text-2xl rounded no-underline hover:bg-blue-600 hover:text-white md:mr-8 md:mt-0 lg:mr-8`}
`;
const HamburgerStyled = styled(HamburgerSpinReverse)`
  ${tw`outline-none border-0 focus:outline-none focus:border-0`}
  span, span::after {
    background-color: ${props => (props.isActive ? "white" : "black")};
  }
`;

const Menu = styled(animated.div)`
  ${tw`self-start absolute h-screen w-full right-0 z-30 bg-blue-900 md:flex md:flex-initial md:items-center md:w-auto md:bg-transparent md:py-0`}
  opacity: .96;
`

function NavBar(props) {
  const [open, toggle] = useState(false);
  // const [bind, { width }] = useMeasure();
  const init = useSpring({
    config: { mass: 1, tension: 280, friction: 45, clamp: true },
    from: {marginRight: -1000},
    to: open ? {marginRight: 0} : {marginRight: -1000}

  });
  const transition = useTransition(open, null, {
    enter: { opacity: 1, width: '75%' },
    leave: { opacity: 0, width: 0 }
  })

  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
      className={`${props.classes} shadow-lg shadow-md fixed bg-white z-40 w-full`}
    >
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between flex-wrap md:py-4 md:px-4 lg:px-4 xl:px-0 xl:py-4">
          <div className="py-3 self-center flex items-center flex-no-shrink text-black">
            <div className="text-blue-500 pl-4 md:pl-0">
              <Logo
                classes={props.logo}
                layout="items-center"
                svg="lg:h-10 lg:w-10"
              />
            </div>
          </div>
          <div className="md:hidden absolute right-0 pt-2 z-40">
            <HamburgerStyled
              buttonWidth={30}
              isActive={open}
              toggleButton={() => toggle(!open)}
            />
          </div>
          <Menu
            id="navMenu"
            style={init}
          >
            <div className="relative h-full">
              <div className="h-full text-lg text-gray-200 flex flex-col justify-center text-center md:flex-row md:text-left">
                <Link to="/services" css={navItem}>
                  services
                </Link>
                <Link to="/work" css={navItem}>
                  work
                </Link>
                <Link to="/contact" css={navItem}>
                  let's talk
                </Link>

                <Social
                  classes={`flex items-center justify-center my-8 md:hidden`}
                  svg={props.svg}
                />
              </div>
            </div>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
