import React from "react";
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";
import Linkedin from "../img/linkedin.svg";

const Social = ({ classes, link }) => (
  <div className={classes}>
    <a href="facebook">
      <Facebook className={`fill-current h-5 w-5 text-gray-500 ${link}`} />
    </a>
    <a href="twitter">
      <Twitter className={`fill-current h-5 w-5 text-gray-500 ml-5 ${link} md:ml-6`} />
    </a>
    <a href="instagram">
      <Instagram className={`fill-current h-5 w-5 text-gray-500 ml-5 ${link} md:ml-6`} />
    </a>
    <a href="linkedin">
      <Linkedin className={`fill-current h-5 w-5 text-gray-500 ml-5 ${link} md:ml-6`} />
    </a>
  </div>
);

export default Social;
