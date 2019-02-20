import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content, { HTMLContent } from "../components/Content";

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data;
  const PageContent = HTMLContent || Content;

  return (
    <Layout>
      <Navbar
        classes="bg-blue-darkest"
        logo="text-white lg:text-5xl"
        navItems="text-grey-dark"
        menuBg="bg-blue-darker"
        menuBtn="text-white"
      />
      <section className="bg-blue-darkest text-white">
        <Hero
          heading={post.frontmatter.hero.heading}
          description={post.frontmatter.hero.description}
          pClass="text-grey-dark"
        />

        <div className="container mx-auto">
          <PageContent className="content" content={post.html} />
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

ServicePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero {
          heading
          description
        }
      }
    }
  }
`;
