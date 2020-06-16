import React, { useState } from "react"
import "../styles/index.scss"
import "../styles/layout-grid.scss"
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import Container from "../components/container"
import portfolioImages from "../constants/imageData/portfolio.js"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import { graphql, useStaticQuery } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import myLogo from "../svgImages/Logo_optimized.svg"
import svgBannerData from "../constants/svgBannerdata.js"
import ImageQuery from "../components/image"
import cardModel from "../models/card"
import Button from "react-bootstrap/Button"

export default function Home({ data }) {
  const [index, setIndex] = useState(0)

  const videoMarkdown = data

  const node = portfolioImages[index]
  const cardInfo = cardModel[index]

  return (
    <ParallaxProvider>
      <div id="main">
        <ParallaxBanner
          layers={svgBannerData}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="title"
            style={{
              zIndex: "2",
            }}
          >
            <img src={myLogo} />
            <h1>Fugitive Graphics</h1>
            <h2>3D, Game and Web Design </h2>

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
        </ParallaxBanner>
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
              <h1>Web Products</h1>
              <h3>
                Here are some examples I did in the last time for my personal
                training and also for the class I visited from January until
                march in Berlin.
              </h3>
            </div>
            <div className="image-text">
              <h1>{cardInfo.title}</h1>
              <p>{cardInfo.description}</p>

              <a href={cardInfo.link} target="blank">
                <Button>Go to Project site</Button>
              </a>
            </div>
            <div className="item-main">
              {node.id === "configVideo" ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: videoMarkdown.markdownRemark.html,
                  }}
                />
              ) : (
                <ImageQuery src={node.image} />
              )}
            </div>

            {portfolioImages.map((image, index) => {
              return (
                <Container>
                  <ImageQuery
                    key={image.id}
                    className={`item-${index + 1}`}
                    id={image.image}
                    src={image.image}
                    onClick={() => {
                      setIndex(index)
                    }}
                  />
                </Container>
              )
            })}
          </LayoutGrid>
        </Layout>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/videos.md/" }) {
      html
    }
  }
`
