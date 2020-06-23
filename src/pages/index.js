import React, { useState } from "react"
//styles
import "../styles/index.scss"
import "../styles/layout-grid.scss"
//components
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import Container from "../components/container"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import ImageQuery from "../components/image"
import Cards from "../components/cards"
//constants
import portfolioImages from "../constants/imageData/portfolio.js"
import svgBannerData from "../constants/svgBannerdata.js"
//query
import { graphql } from "gatsby"
//banner
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import myLogo from "../svgImages/Logo_optimized.svg"
//data
import cardModel from "../models/card"
//bootstrap
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
            <h1>Florian Gaebler</h1>
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
            <h1>About</h1>
            <h4></h4>
          </div>
          <Cards />
          <div className="filler" style={{ height: "100px" }}></div>
          <div className="intro" style={{ alignSelf: "center" }}>
            <h1>Portfolio</h1>
          </div>
          <LayoutGrid>
            <div id="image-text">
              <h2>{cardInfo.title}</h2>
              <h4>{cardInfo.description}</h4>

              <ButtonThing href={cardInfo.link} target="blank">
                Go to Project site
              </ButtonThing>
            </div>
            <div className="item-main">
              {node.id === "configVideo" ? (
                <div
                  className="item-main"
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
                <ImageQuery
                  key={image.id}
                  className={`item-${index + 1}`}
                  id={image.image}
                  src={image.image}
                  onClick={() => {
                    document.getElementById("image-text").scrollIntoView({
                      behavior: "smooth",
                    })
                    setIndex(index)
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

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/videos.md/" }) {
      html
    }
  }
`
