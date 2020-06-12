import React, { useState } from "react"
import "../styles/index.scss"
import "../styles/layout-grid.scss"
import Layout from "../components/layout"
import LayoutGrid from "../components/layoutGrid"
import Footer from "../components/footer"
import ButtonThing from "../components/button"
import { graphql, useStaticQuery } from "gatsby"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import myLogo from "../svgImages/Logo_optimized.svg"
import svgBannerData from "../constants/svgBannerdata.js"
import ImageQuery from "../components/image"
import cardModel from "../models/card"

export default function Home() {
  const [index, setIndex] = useState(0)
  const [fadeIn, setfadeIn] = useState(false)

  const { allFile } = useStaticQuery(graphql`
    {
      allFile(sort: { fields: name }) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(maxWidth: 1120) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const { node } = allFile.edges[index]
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
              <h1>
                Web Products
              </h1>
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
                Go to Project site
              </a>
            </div>
            <div className="item-main">
              <ImageQuery
                fluid={node.childImageSharp.fluid}
                fadeIn={fadeIn}
              ></ImageQuery>
            </div>

            {allFile.edges.map((edge, index) => {
              return (
                <ImageQuery
                  key={edge.node.id}
                  className={`item-${index + 1}`}
                  id={edge.node.childImageSharp.id}
                  fluid={edge.node.childImageSharp.fluid}
                  fadeIn={fadeIn}
                  onClick={() => {
                    setIndex(index)
                    setfadeIn(true)
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
