import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content, { HTMLContent } from '../components/Content'

export const ServicePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <PageContent className="content" content={content} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg-blue-darkest text-white">

      <Hero />
      
      <div className="container mx-auto">
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

ServicePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Navbar classes="bg-blue-darkest" logo="text-white lg:text-5xl" navItems="text-grey-dark" menuBg="bg-blue-darker" menuBtn="text-white"/>
      <ServicePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <Footer />
    </Layout>
  )
}

ServicePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicePage

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
