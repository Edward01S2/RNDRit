import React from 'react'
//import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = () => {

  return (
    <section className="section section--gradient">
      <div>Here</div>
    </section>
  )
}

// HomePageTemplate.propTypes = {
//   //hero: PropTypes.string.isRequired,
//   //content: PropTypes.string,
//   //contentComponent: PropTypes.func,
// }

// const HomePage = ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <Layout>
//       <HomePageTemplate
//       />
//     </Layout>
//   )
// }

// HomePage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

//export default HomePage

// export const homePageQuery = graphql`
//   query HomePage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         hero
//       }
//     }
//   }
// `
