import React from "react";
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";
import Linkedin from "../img/linkedin.svg";

const Social = ({ classes, link, svg }) => (
  <div className={classes}>
    <a href="facebook">
      <Facebook className={`fill-current h-8 w-8 ${svg}`} />
    </a>
    <a href="twitter">
      <Twitter className={`fill-current h-8 w-8 ml-6 ${svg} md:ml-6`} />
    </a>
    <a href="instagram">
      <Instagram className={`fill-current h-8 w-8 ml-6 ${svg} md:ml-6`} />
    </a>
    <a href="linkedin">
      <Linkedin className={`fill-current h-8 w-8 ml-6 ${svg} md:ml-6`} />
    </a>
  </div>
);

export default Social;
