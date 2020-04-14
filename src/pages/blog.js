import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import ContainerPage from "../styles/container"
import CardPost from "../components/CardPost"

const BlogPage = () => (
  <>
    <Layout>
      <SEO title="blog" />
    </Layout>
    <ContainerPage>
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
    </ContainerPage>
  </>
)

export default BlogPage
