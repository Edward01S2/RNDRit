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
      <div className="bg-blue-darkest text-white">
        <Hero
          heading={post.frontmatter.hero.heading}
          description={post.frontmatter.hero.description}
          pClass="text-grey-dark"
        />

        <section className="container mx-auto">
          <h3>{post.frontmatter.point.heading}</h3>
          <PageContent className="content" content={post.frontmatter.point.body} />
        </section>
      </div>

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
        point {
          heading
          body
        }
      }
    }
  }
`;
