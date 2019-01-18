import React from 'react'
import PropTypes from 'prop-types'
//import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const page = posts[0].node.frontmatter.hero
    //console.log(page);

    return (
      <Layout>
        <div className="container mx-auto">
          <section id="hero" className="px-3 py-32">
            <div className="text-center">
              <h1 className="">{page.heading}</h1>
              <p className="pt-5 px-3">{page.description}</p>
            </div>
          </section>

          <section id="latest-work">

          </section>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexPage{
    allMarkdownRemark (limit:1, filter: { frontmatter: { templateKey: {eq: "home-page"}}}) {
      edges {
        node {
          frontmatter {
            hero {
              heading
              description
            }
          }
        } 
      }
    }
  }
`