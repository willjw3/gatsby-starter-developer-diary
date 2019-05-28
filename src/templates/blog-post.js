import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({data}) => {
  const post = data.markdownRemark  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
