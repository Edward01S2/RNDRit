import React from "react";
import Facebook from "../img/facebook.svg";
import Twitter from "../img/twitter.svg";
import Instagram from "../img/instagram.svg";
import Linkedin from "../img/linkedin.svg";

const Social = ({ classes }) => (
  <div className={classes}>
    <a href="facebook">
      <Facebook className="fill-current h-5 text-grey-dark" />
    </a>
    <a href="twitter">
      <Twitter className="fill-current h-5 pl-5 text-grey-dark md:pl-6" />
    </a>
    <a href="instagram">
      <Instagram className="pl-5 text-grey-dark fill-current h-5 md:pl-6" />
    </a>
    <a href="linkedin">
      <Linkedin className="pl-5 text-grey-dark fill-current h-5 md:pl-6" />
    </a>
  </div>
);

export default Social;
