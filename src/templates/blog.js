import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from "gatsby-image";
import {HTMLRenderer} from 'react-html-renderer'

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const query = graphql`
query BlogQuery($uid: String!) {
  prismicBlog(uid: {eq: $uid}) {
    uid
    data {
      title {
        text
      }
      feature_image {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 93) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body {
        html
      }
      publish_date(formatString: "MM-DD-YYYY")
      tags {
        raw {
          text
        }
      }
      description
    }
  }
}
`
 
const Blog = ({ data: { prismicBlog, posts }, location}) => {
  const { data } = prismicBlog

  function createMarkup(cms) {
    return { __html: cms };
  }
  
  return (
    <Layout>
     <Helmet>
        <title>{data.title.text}</title>
        <meta
          name="description"
          content={data.description}
        />
      </Helmet>
    <Navbar
      logo="text-black lg:text-5xl"
      navItems="text-gray-700"
      menuBg="bg-grey-200"
    />

      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="font-robot py-8">
          <h1
            className={`font-bold text-3xl xl:text-4xl`}
          >
            {data.title.text}
          </h1>
          <p className={`pt-2 text-sm leading-loose md:pr-16 lg:text-base xl:text-2xl}`}>
            {data.description}
          </p>
        </div>

        <div className="pb-8">
        <Img
          fluid={data.feature_image.localFile.childImageSharp.fluid}
          className=""
        />
        </div>

        <div class="content pb-12 lg:pb-24">
          <HTMLRenderer
            html={data.body.html}
          />
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
 
export default Blog;