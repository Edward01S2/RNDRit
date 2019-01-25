import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from "gatsby-image";
import uuid from "uuid";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const hero = data.front.edges[0].node.frontmatter.hero;
    const work = data.work.edges[0].node.frontmatter;
    const dev = data.front.edges[0].node.frontmatter.dev;
    const feat = data.front.edges[0].node.frontmatter.feature;
    //console.log(feat);
    const tags = work.tags.map((tag) => {
      return (
        <p key={uuid.v4()} className="pl-4">
          {tag}
        </p>
      );
    });
    //console.log(work);

    return (
      <Layout>
        <div className="container mx-auto">

          <section id="hero" className="py-32 px-4">
            <div className="font-robot">
              <h1 className="font-black text-5xl">{hero.heading}</h1>
              <p className="pt-4 text-xl leading-normal">{hero.description}</p>
            </div>
          </section>

          <section id="latest-work" className="px-4">
            <div>
              <div>
                <Img fluid={work.image.childImageSharp.fluid} />
              </div>
              <div className="bg-blue-darker">
                <div className="flex justify-between items-center text-grey-light font-semibold py-4 px-4">
                  <div>
                    <p className="uppercase text-sm tracking-wide">
                      Latest Work
                    </p>
                  </div>
                  <div>
                    <Link
                      to="/work"
                      className="text-grey-light tracking-wide text-sm no-underline flex items-center"
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
              <div className="bg-blue-darkest font-robot px-4 py-12">
                <h3 className="text-3xl font-bold pb-4 text-blue-lightest">
                  {work.title}
                </h3>
                <p className="leading-normal pb-4 text-blue-lighter">
                  {work.description}
                </p>
                <div className="flex pb-6 text-grey-dark text-sm">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
                  </svg>
                  {tags}
                </div>

                <div>
                  <a
                    className="bg-blue-dark hover:bg-blue-dark text-white py-2 px-6 rounded no-underline inline-flex items-center"
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-current h-4 w-4"
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
          </section>

          <section id="development" className="py-24 px-4">
            <div>
              <p className="font-open uppercase text-xs tracking-wide pb-4">{dev.sub}</p>
              <h3 className="font-robot text-4xl font-bold w-24 border-l-4 border-blue-dark pl-4">{dev.head}</h3>
            </div>
            <div>
              <p className="font-semibold opacity-50 leading-normal pt-4 ">{dev.description} </p>
            </div>
          </section>

          <section id="featured" className="bg-blue-dark text-white text-shadow">
            <div className="px-4 py-8">
              {feat.map(({ card }) => (
                <div key={uuid.v4()} className="p-4 mb-4">
                  {/* <p>{card.icon}</p> */}
                  <h4 className="text-xl pb-4">{card.title}</h4>
                  <p className="text-blue-lighter leading-normal">{card.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
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
                description
                link
              }
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
                fluid(maxWidth: 500, maxHeight: 350, quality: 93) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;
