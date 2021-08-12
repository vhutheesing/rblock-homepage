import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="rBlock" />

    <div  style={{textAlign:`center`,verticalAlign:`middle`, height:`500px`, marginBottom:`20px`}}>
    <StaticImage
      src="../images/videographic.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Video"
    />
    </div>
     <div style={{textAlign:`center`, margin:`10px`}}>rBlock is a private, location-based communication network for residents.
Its mission is to enable greater reach for the communications you send and greater relevance for the ones you receive.</div>


  </Layout>
)

export default IndexPage
