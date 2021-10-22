import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Main from '../components/Main'
import CarouselContainer from '../components/Carousel'
import Different from "../components/Different"
import Banner from "../components/Banner"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main/>
    <Different/>
    <CarouselContainer/>
    <Banner/>
  </Layout>
)

export default IndexPage
