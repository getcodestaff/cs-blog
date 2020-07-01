import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    navigate("/blogs")
  }, [])
  return (
    <Layout>
      <SEO title="Web Development Blog for Freelancers: Tips & Tricks for Programmers" />
      <h1>Index</h1>
    </Layout>
  )
}

export default IndexPage
