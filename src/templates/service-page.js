import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content, { HTMLContent } from "../components/Content";
import uuid from "uuid";
import TriSvg from "../img/triangle.svg";
import ScrollAnimation from 'react-animate-on-scroll';

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
          <div className="flex flex-col px-8">
            <div className="mx-auto mb-12">
              <ScrollAnimation animateIn="triangleAnimation" duration="7s">
                <TriSvg className="triangle fill-current text-white h-64 w-64"/>
              </ScrollAnimation>
            </div>
            <div>
              <h3 className="text-2xl pb-4 leading-normal">{post.frontmatter.point.heading}</h3>
              <div className="text-grey-dark leading-loose">
                <p className="pb-4">{post.frontmatter.point.body}</p>
                <ul className="list-reset">
                {post.frontmatter.point.bullets.map(tag => (
                  <li key={uuid.v4()} className="flex items-center">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"/></svg>
                    <span className="pl-2">{tag}</span>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </div>
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
          bullets
        }
      }
    }
  }
`;
