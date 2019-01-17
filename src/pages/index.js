import React from 'react'
import PropTypes from 'prop-types'
//import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: nodes } = data.allMarkdownRemark
    const page = nodes[0].node
    //console.log(page);

    return (
      <Layout>
        <div className="container mx-auto">
          <section id="hero" className="p-3">
            <div className="text-center">
              <h1 className="">{page.frontmatter.hero}</h1>
              <p className="">{}</p>
            </div>
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
            hero
          }
        } 
      }
    }
  }
`