import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Main'
import CarouselContainer from '../components/Carousel'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main/>
    <CarouselContainer/>
  </Layout>
)

export default IndexPage
