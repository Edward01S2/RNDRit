import React from 'react'
import Rndr from "../img/rndr.svg";
import MenuSvg from "../img/menu.svg";
import CloseSvg from "../img/close.svg";

const Logo = ({classes, layout, svg}) => (
  <div className={`flex ${layout}`}>
    <Rndr className={`svg-default h-8 w-8 fill-current text-blue-dark border-none ${svg}`}/>
    <h2 className={`text-4xl pl-2 font-bold font-sans tracking-wide text-black ${classes}`}>rndr</h2>
  </div>
)

const Menu = ({classes}) => (
  <div>
    <MenuSvg className={classes} />
  </div>
)

const Close = ({classes}) => (
  <div>
    <CloseSvg className={classes} />
  </div>
)

export {Logo, Menu, Close}