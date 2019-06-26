import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Tech from "../components/Tech";
import Feature from "../components/Feature";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Img from "gatsby-image";
import uuid from "uuid";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const home = data.home.data;
    //const work = data.work.nodes[0].data;
    const { edges: works } = data.work;
    const { edges: nodes } = data.posts;
    //console.log(work);


    // function createMarkup(cms) {
    //   return { __html: cms };
    // }

    return (
      <Layout>
        <Navbar
          logo="text-black lg:text-5xl"
          navItems="text-gray-700"
          menuBg="bg-grey-200"
        />

        {/* HERO SECTION */}
        <Hero
          heading={home.hero_title.text}
          description={home.hero_subtitle.text}
          hSize="text-5xl"
        />

        {/* LATEST WORK SECTION */}
        <section id="latest-work" className="container mx-auto">
          <div className="px-4 lg:px-8">
          {works.map(({ node: work }) => (
            <div className="flex flex-col bg-blue-800 md:flex-row">
              <div className="md:w-1/2 md:order-1">
                <Img fluid={work.data.image.localFile.childImageSharp.fluid} />
              </div>
              <div className="flex flex-col md:w-1/2 md:order-0">
                <div className="bg-blue-900">
                  <div className="flex justify-between items-center text-gray-300 font-semibold py-4 px-4 md:py-6 lg:px-8 py-6">
                    <div>
                      <p className="uppercase text-xs tracking-wide lg:text-sm xl:text-base">
                        Latest Work
                      </p>
                    </div>
                    <div>
                      <Link
                        to=""
                        className="text-gray-300 tracking-wide text-xs no-underline flex items-center hover:text-white lg:text-sm xl:text-base"
                      >
                        <span>See All</span>
                        <span className="pl-3">
                          <svg
                            className="fill-current h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1"
                            height="1"
                            viewBox="0 0 20 20"
                          >
                            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="px-4 py-8 flex-grow flex justify-center items-center md:px-4 lg:px-16">
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-semi-bold font-robot tracking-wide pb-2 text-white md:text-2xl lg:pb-6 lg:text-4xl">
                      {work.data.title.text}
                    </h3>
                    <p className="leading-normal text-gray-200 md:text-sm lg:text-base xl:text-lg">
                      {work.data.description.text}
                    </p>
                    <div className="flex items-center pt-4 pb-5 text-gray-500 text-sm lg:py-6 xl:text-base">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1"
                        height="1"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z" />
                      </svg>
                      {work.data.tags.raw.map(tag => (
                        <p key={uuid.v4()} className="pl-4">
                          {tag.text}
                        </p>
                      ))}
                    </div>

                    <div>
                      <a
                        className="bg-blue-500 hover:bg-blue-600 trans-y text-white py-2 pl-6 pr-8 mb-4 rounded no-underline inline-flex items-center xl:text-xl xl:py-3"
                        href={work.data.link.url}
                        target={work.data.link.target}
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="fill-current h-4 w-4 xl:h-5 xl:w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="1"
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
          ))}
          </div>
        </section>

        {/* WEB DEVELOPMENT */}
        {home.services.length > 0 && (
          <Tech
            title={home.services[0].title.text}
            sub={home.services[0].subtitle.text}
            des={home.services[0].description.text}
          />
        )}

        {/* WEB DEVELOPMENT FEAT */}
        <section
          id="featured"
          className="bg-blue-600 text-gray-100 text-shadow text-center"
        >
          <div className="container mx-auto">
            <div className="px-4 pt-20 pb-16 flex flex-col md:flex-row">
              {home.feature.map(card => {
                return (
                  <Feature
                    key={uuid.v4()}
                    title={card.title}
                    list={card.list}
                    icon={card.icon}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* MANAGED IT & SUPPORT SERVICES */}
        {home.services.length > 0 && (
          <Tech
            title={home.services[1].title.text}
            sub={home.services[1].subtitle.text}
            des={home.services[1].description.text}
          />
        )}

        {/* LATEST POSTS */}
        <section className="bg-blue-700">
          <div className="container mx-auto">
            <div className="py-20 px-4 md:px-8 lg:py-16">
              <div className="text-center text-white">
                <p className="uppercase text-sm tracking-wide pb-4 text-shadow">
                  Articles
                </p>
                <h3 className="text-3xl font-semibold font-robot pb-8 tracking-wide text-shadow lg:text-4xl">
                  Lastest Posts
                </h3>
              </div>

              <div className="lg:flex lg:max-w-5xl lg:mx-auto">
                {nodes.map(({ node: post }) => (
                  <Link
                    className="no-underline w-1/3"
                    to={post.data.link.url}
                    key={post.id}
                  >
                    <div className="scale-up md:mb-4 lg:p-4 xl:p-8 xl:pb-0">
                      <div className="flex lg:flex-col">
                        <div className="hidden md:block md:w-1/4 md:mb-4 lg:mb-0 lg:w-full lg:h-68">
                          <Img
                            fluid={post.data.feature_image.localFile.childImageSharp.fluid}
                            className="md:h-full"
                          />
                        </div>
                        <div className="no-underline bg-white rounded-sm shadow shadow-md text-black p-4 mb-4 border-l-4 border-blue-500 w-full md:border-none md:w-3/4 md:rounded-none md:rounded-r-sm lg:w-full">
                          <p className="pb-4 font-semibold text-lg border-b text-blue-900 md:text-xl md:h-20 lg:h-28">
                            {post.data.title.text}
                          </p>
                          <div className="flex justify-between items-center pt-3">
                            <p className="text-xs text-blue-800 uppercase font-open font-medium">
                              {post.data.publish_date}
                            </p>
                            <p className="no-underline text-xs text-gray-800 flex justify-end lg:text-sm">
                              Read More{" "}
                              <span>
                                <svg
                                  className="h-5 w-5 pl-2 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1"
                                  height="1"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
                                </svg>
                              </span>
                            </p>
                          </div>
                        </div>
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
              <p className="font-open uppercase text-sm tracking-wide pb-4 text-gray-800">
                {home.contact_subtitle.text}
              </p>
              <h3
                className={`font-robot text-3xl font-bold pb-4 tracking normal lg:text-4xl xl:text-5xl`}
              >
                {home.contact_title.text}
              </h3>
              <p className="opacity-75 leading-normal pb-8 md:w-3/5 md:m-auto lg:text-lg">
                {home.contact_description.text}
              </p>
              <Link
                to="/about"
                className="bg-blue-500 hover:bg-blue-600 hover:shadow trans-y text-white py-3 px-6 rounded no-underline inline-flex items-center text-lg xl:text-xl"
              >
                {home.contact_button.text}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexPage {
    home: prismicHomepage {
      data {
        hero_title {
          text
        }
        hero_subtitle {
          text
        }
        services {
          title {
            text
          }
          subtitle {
            text
          }
          description {
            text
          }
        }
        contact_title {
          text
        }
        contact_subtitle {
          text
        }
        contact_description {
          text
        }
        contact_button {
          text
        }
        feature {
          list {
            raw {
              text
            }
          }
          title {
            text
          }
        }
      }
    }

    work: allPrismicWork(sort: {order: DESC, fields: data___create_date}, limit: 1) {
      edges {
        node {
          data {
            create_date(formatString: "MM-DD-YYYY")
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 93) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            link {
              url
              target
            }
            tags {
              raw {
                text
              }
            }
            title {
              text
            }
            description {
              text
            }
            body {
              html
            }
          }
        }
      }
    }

    posts: allPrismicBlog(sort: {order: DESC, fields: data___publish_date}, limit: 3) {
      edges {
        node {
          data {
            feature_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 93) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title {
              text
            }
            link {
              url
            }
            publish_date(formatString: "MMM DD")
          }
          id
        }
      }
    }
  }
`;
