import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "../css/style.scss";

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div>{children}</div>
      </div>
    )}
  />
);

export default TemplateWrapper;
