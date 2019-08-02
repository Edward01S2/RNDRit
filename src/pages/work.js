import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WorkItem from "../components/WorkItem";

export default class WorkPage extends React.Component {
  render() {
    const { data } = this.props;
    const workp = data.workp.data;
    const { edges: works } = data.works;
    //console.log(works[0]);

    return (
      <Layout>
        <Navbar
          logo="text-black lg:text-5xl"
          navItems="text-gray-700"
          menuBg="bg-grey-200"
        />

        {/* HERO SECTION */}
        <section id="hero" className="container mx-auto">
          <div className="px-8 py-16 md:py-24 md:pt-48">
            <div className="font-robot md:w-3/5">
              <h1
                className={`font-bold font-sans text-5xl tracking-wider xl:text-6xl`}
              >
                {workp.title.text}
              </h1>

              <p
                className={`pt-4 text-xl text-gray-800 leading-loose xl:text-2xl`}
              >
                {workp.subtitle.text}
              </p>
            </div>
          </div>
        </section>

        <section id="latest-work" className="container mx-auto pb-24">
          <div id="work-items" className="">
          <WorkItem work={works[0].node} bg="bg-blue-800"/>
          <WorkItem work={works[1].node} textR={true} bg="bg-gray-700"/>
          {/* {works.map(({ node: work }) => (
            <WorkItem work={work} textR={true}/>
          ))} */}
          </div>
        </section>

        <Footer />
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query WorkPage {
    workp: prismicWorkPage {
      data {
        subtitle {
          text
        }
        title {
          text
        }
      }
    }
    works: allPrismicWork(sort: {order: DESC, fields: data___create_date}, limit: 2) {
      edges {
        node {
          data {
            create_date(formatString: "MM-DD-YYYY")
            image {
              localFile {
                url
              }
            }
            color
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
  }
`;
