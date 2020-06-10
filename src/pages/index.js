import React, { useState } from "react"
import "../styles/index.scss"
import "../styles/layout-grid.scss"
import Container from "../components/container"
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import { graphql, useStaticQuery } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import myLogo from "../svgImages/Logo.svg"
import svgBannerData from "../constants/svgBannerdata.js"
import ImageQuery from "../components/image"

export default function Home({ data }) {
  const { selectedimage, setSelectedimage } = useState(
    data.ImpalaImage.childImageSharp.fluid.src
  )
  console.log(selectedimage)

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
            <h3>
              Here are some examples I did in the last time for my personal
              training and also for the class I visited from January until march
              in Berlin where I learned a alot of rails
            </h3>
          </div>
          <div className="filler" style={{ height: "500px" }}></div>
          <div className="intro" style={{ alignSelf: "center" }}>
            <h1>Portfolio</h1>
          </div>
          <LayoutGrid>
            <div className="text">
              <h1>
                Lets type a alot of text Here to make sure everything fits
                correctly
              </h1>
              <h3>
                Here are some examples I did in the last time for my personal
                training and also for the class I visited from January until
                march in Berlin where I learned a alot of rails
              </h3>
            </div>
            <ImageQuery className="item-main" fluid={selectedimage} />
            {data.allFile.edges.map((edge, index) => {
              return (
                <ImageQuery
                  className={`item-${index + 1}`}
                  id={edge.node.childImageSharp.id}
                  fluid={edge.node.childImageSharp.fluid}
                  onClick={() => {
                    if (selectedimage) {
                      setSelectedimage(edge.node.childImageSharp.fluid.src)
                    }
                  }}
                />
              )
            })}
          </LayoutGrid>
        </Layout>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export const query = useStaticQuery(graphql`
  {
    allFile(sort: { fields: name }) {
      edges {
        node {
          id
          childImageSharp {
            id
            fluid(maxHeight: 480, maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`)
