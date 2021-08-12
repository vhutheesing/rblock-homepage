import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="rBlock" />

    <div  style={{textAlign:`center`,verticalAlign:`middle`, marginBottom:`20px`}}>
    <StaticImage
      src="../images/videographic.png"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Video"
    />
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7osa7cmI2MY?rel=0" frameborder="0" allowfullscreen=""></iframe>

    </div>
     <div style={{textAlign:`center`, margin:`10px`}}>rBlock is a private, location-based communication network for residents.
Its mission is to enable greater reach for the communications you send and greater relevance for the ones you receive.</div>


  </Layout>
)

export default IndexPage
