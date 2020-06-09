import React from "react"
import "../styles/index.scss"
import Container from "../components/container"
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import { graphql } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import myLogo from "../svgImages/Logo.svg"
import svgBannerData from "../constants/svgBannerdata.js"
import ImageQuery from "../components/image"

export default function Home({ data }) {
  return (
    <ParallaxProvider>
      <div id="main">
        <div
          className="title"
          style={{
            position: "absolute",
            top: "40vh",
            left: "40vw",
            zIndex: "2",
          }}
        >
          <img src={myLogo} />
          <h1>Welcome</h1>
          <p>please feel free to visit this site </p>
          <ButtonThing
            onClick={() => {
              document.getElementById("ContainerId").scrollIntoView({
                behavior: "smooth",
              })
            }}
          >
            Get Started
          </ButtonThing>
        </div>
        <ParallaxBanner
          className="your-class"
          layers={svgBannerData}
          style={{
            height: "100vh",
          }}
        ></ParallaxBanner>
        <Layout id="ContainerId">
          <div className="intro">
            <h1>Rails and React</h1>
            <p>
              Here are some examples I did in the last time for my personal
              training and also for the class I visited from January until march
              in Berlin where I learned a alot of rails
            </p>
          </div>
          <div className="filler" style={{ height: "500px" }}></div>
          <div className="intro" style={{ alignSelf: "center" }}>
            <h1>Portfolio</h1>
          </div>
          <LayoutGrid>
            <ImageQuery />
          </LayoutGrid>
        </Layout>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          html
        }
      }
    }
  }
`
