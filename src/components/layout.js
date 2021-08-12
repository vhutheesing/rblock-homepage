/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
            <div className={`pgFoo`}> 
                <div className={`fooLft`}> 
                  <a href="aboutus.html" target="_blank">About Us</a>
                  <a href="/benefits.html" target="_blank">Benefits</a>
                  <a href="/blog.html" target="_blank">Blog</a>
                  <a href="/FAQ.html" target="_blank">FAQ</a>
                  <a href="/privacypolicy.html" target="_blank">Privacy Policy</a>
                  <a href="/siteterms.html" target="_blank">Site Terms</a> 
              </div> 
               <div className={`fooRht`}> Copyright © 2012 rBlock Inc. All rights reserved. </div> <div className={`clr`}></div> 
              </div>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
