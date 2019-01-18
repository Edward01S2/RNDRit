import React from 'react'
//import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = () => {

  return (
    <div></div>
  )
}

// HomePageTemplate.propTypes = {
//   //hero: PropTypes.string.isRequired,
//   //content: PropTypes.string,
//   //contentComponent: PropTypes.func,
// }

const HomePage = () => {
  return (
    <HomePageTemplate>
        <div>Test</div>
    </HomePageTemplate>
    
  )
}

// HomePage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default HomePage

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
