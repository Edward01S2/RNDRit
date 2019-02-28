import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Tech from "../components/Tech";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Img from "gatsby-image";
import uuid from "uuid";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const hero = data.front.edges[0].node.frontmatter.hero;
    const work = data.work.edges[0].node.frontmatter;
    const dev = data.front.edges[0].node.frontmatter.dev;
    const feat = data.front.edges[0].node.frontmatter.feature;
    const it = data.front.edges[0].node.frontmatter.it;
    const cont = data.front.edges[0].node.frontmatter.contact;

    const { edges: posts } = data.blog;

    function createMarkup(cms) {
      return { __html: cms };
    }

    return (
      <Layout>
        <Navbar logo="text-black lg:text-5xl" navItems="text-grey-darker" menuBg="bg-grey-lighter"/>

        {/* HERO SECTION */}
        <Hero heading={hero.heading} description={hero.description} hSize="text-5xl"/>

        {/* LATEST WORK SECTION */}
        <section id="latest-work" className="container mx-auto">
          <div className="px-4 lg:px-8">
            <div className="flex flex-col bg-blue-darkest md:flex-row">
              <div className="md:w-1/2 md:order-1">
                <Img fluid={work.image.childImageSharp.fluid} />
              </div>
              <div className="flex flex-col md:w-1/2 md:order-0">
                <div className="bg-blue-darker">
                  <div className="flex justify-between items-center text-grey-light font-semibold py-4 px-4 md:py-6 lg:px-8 py-6">
                    <div>
                      <p className="uppercase text-xs tracking-wide xl:text-base">
                        Latest Work
                      </p>
                    </div>
                    <div>
                      <Link
                        to="/work"
                        className="text-grey-light tracking-wide text-xs no-underline flex items-center hover:text-white xl:text-base"
                      >
                        <span>See All</span>
                        <span className="pl-3">
                          <svg
                            className="fill-current h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-8 flex-grow flex justify-center items-center md:px-6 lg:px-16">
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-semi-bold font-robot tracking-wide pb-4 text-blue-lightest lg:pb-6 lg:text-4xl">
                      {work.title}
                    </h3>
                    <p className="leading-normal text-grey xl:text-lg">
                      {work.description}
                    </p>
                    <div className="flex items-center pt-4 pb-5 text-grey-dark text-sm lg:py-6 xl:text-base">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
                      </svg>
                      {work.tags.map(tag => (
                        <p key={uuid.v4()} className="pl-4">
                          {tag}
                        </p>
                      ))}
                    </div>

                    <div>
                      <a
                        className="bg-blue hover:bg-blue-dark trans-y text-white py-2 pl-6 pr-8 mb-4 rounded no-underline inline-flex items-center xl:text-xl xl:py-3"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="fill-current h-4 w-4 xl:h-5 xl:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
                        </svg>
                        <span className="pl-3">See it live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEB DEVELOPMENT */}
        <Tech data={dev} />

        {/* WEB DEVELOPMENT FEAT */}
        <section
          id="featured"
          className="bg-blue-dark text-grey-lightest text-shadow text-center"
        >
          <div className="container mx-auto">
            <div className="px-4 pt-20 pb-16 flex flex-col md:flex-row">
              {feat.map(({ card }) => (
                <div key={uuid.v4()} className="p-4 mb-4 md:w-1/3">
                  <h4 className="text-2xl pb-4 inline-flex items-center content-center">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      dangerouslySetInnerHTML={createMarkup(card.icon)}
                    />
                    <span className="pl-3 tracking-wide font-sans font-normal">
                      {card.title}
                    </span>
                  </h4>
                  <ul className="text-blue-lighter leading-loose list-reset text-lg">
                    {card.list.map(item => (
                      <li key={uuid.v4()}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* MANAGED IT & SUPPORT SERVICES */}
        <Tech data={it} width={36} />
        
        {/* LATEST POSTS */}
        <section className="bg-blue-darker">
          <div className="container mx-auto">
            <div className="py-20 px-4 lg:px-8 lg:py-24">
              <div className="text-center text-white">
                <p className="uppercase text-sm tracking-wide pb-4 text-shadow">Articles</p>
                <h3 className="text-3xl font-semibold font-robot pb-8 tracking-wide text-shadow lg:text-4xl">
                  Lastest Posts
                </h3>
              </div>

              <div className="md:grid md:grid-columns-3 md:grid-gap-4 lg:grid-gap-8 xl:grid-gap-16">
                {posts.map(({ node: post }) => (
                  <Link
                    className="no-underline"
                    to={post.fields.slug}
                    key={post.id}
                  >
                    <div className="scale-up">
                      <div className="hidden md:block">
                        <Img
                          fluid={post.frontmatter.image.childImageSharp.fluid}
                        />
                      </div>
                      <div className="no-underline bg-white rounded-sm shadow shadow-md text-black p-4 mb-4 border-l-4 border-blue md:border-none">
                        <p className="text-xs pb-4 text-blue-darker uppercase font-open font-semibold">
                          {post.frontmatter.date}
                        </p>
                        <p className="pb-4 font-bold text-lg border-b text-blue-darkest md:text-xl">
                          {post.frontmatter.title}
                        </p>
                        <p className="pt-3 no-underline text-xs text-grey-darker lg:text-sm">
                          Read More{" "}
                          <span>
                            <svg
                              className="h-2 w-2 pl-2 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                            </svg>
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="container mx-auto">
          <div className="py-24 px-4 md:py-32 lg:py-40">
            <div className="text-center">
              <p className="font-open uppercase text-sm tracking-wide pb-4 text-grey-darker">
                {cont.sub}
              </p>
              <h3
                className={`font-robot text-3xl font-bold pb-4 tracking normal lg:text-4xl xl:text-5xl`}
              >
                {cont.head}
              </h3>
              <p className="font-semibold opacity-75 leading-normal pb-8 md:w-3/5 md:m-auto lg:text-lg">
                {cont.description}
              </p>
              <Link
                to="/about"
                className="bg-blue hover:bg-blue-dark hover:shadow trans-y text-white py-3 px-6 rounded no-underline inline-flex items-center text-lg xl:text-xl"
              >
                {cont.button}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexPage {
    front: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            hero {
              heading
              description
            }
            dev {
              sub
              head
              description
            }
            feature {
              card {
                icon
                title
                list
              }
            }
            it {
              sub
              head
              description
            }
            contact {
              sub
              head
              description
              button
            }
          }
        }
      }
    }

    work: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            link
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 93) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }

    blog: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD")
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 300, quality: 93) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
