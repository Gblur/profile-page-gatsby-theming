import React, { useState } from "react"
//styles
import "../styles/index.scss"
import "../styles/layout-grid.scss"
import "../styles/container.scss"
import layoutStyle from "../styles/layout.module.scss"
//components
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import Container from "../components/container"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import ImageQuery from "../components/image"
import Cards from "../components/infoTabs"
import classNames from "classnames"
import ThemeToggle from "../theme/toggle/index"
//constants
import portfolioImages from "../constants/cardData/portfolio.js"
import svgBannerData from "../constants/bannerdata/svgBannerdata.js"
//query
import { graphql } from "gatsby"
//banner
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import myLogo from "../svgImages/Logo_optimized.svg"
//data
import cardModel from "../constants/cardData/card"
//bootstrap

export default function Home({ data }) {
  const [index, setIndex] = useState(0)

  const videoMarkdown = data

  const node = portfolioImages[index]
  const cardInfo = cardModel[index]

  // var classNames = require("classnames")

  return (
    <ParallaxProvider>
      <div id="main">
        <ParallaxBanner
          layers={svgBannerData}
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "19%",
            paddingTop: "7%",
            overflow: "visible",
            backgroundColor: "var(--color-bg)",
            zIndex: "150",
            transition: "all .5s ease-in-out",
          }}
        >
          <div
            className="title"
            style={{
              zIndex: "2",
            }}
          >
            <img src={myLogo} style={{ width: "150px" }} />
            <h2>Florian Gaebler</h2>
            <h2>3D and Web Design </h2>

            {/* <ButtonThing
              onClick={() => {
                document.getElementById("ContainerId").scrollIntoView({
                  behavior: "smooth",
                })
              }}
            > */}
            {/* Get Started */}
            {/* </ButtonThing> */}
            <ThemeToggle />
          </div>
        </ParallaxBanner>
        <Layout id="ContainerId" className={layoutStyle.layout}>
          <div className="intro">
            <h1>About</h1>
            <p>
              Hi I'm Florian and I'm a junior full stack developer near Hamburg. 
            </p>
          </div>
          <Cards />
          <div className="filler" style={{ height: "100px" }}></div>
          <div className="intro" style={{ alignSelf: "center" }}>
            <h1>Portfolio</h1>
          </div>
          <LayoutGrid>
            <div id="image-text">
              <h2>{cardInfo.title}</h2>
              <div style={{ display: "flex" }}>
                {cardInfo.technology.map(tech => (
                  <div className="containerTech">
                    <p>{tech}</p>
                  </div>
                ))}
              </div>
              <p>{cardInfo.description}</p>

              <ButtonThing href={cardInfo.link} target="blank">
                EXPLORE
              </ButtonThing>
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
                <Container
                  className={classNames(`containerCard`, `item-${index + 1}`)}
                >
                  <ImageQuery
                    key={image.id}
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
          <p>
            For more content and information, check out the links in the footer
          </p>
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
