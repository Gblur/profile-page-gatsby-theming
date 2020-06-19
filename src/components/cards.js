import React from "react"
import "../styles/cards.scss"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMobileAlt,
  faCode,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons"
import IconStyle from "../constants/iconstyle.js"

const Cards = props => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          <div className="item">
            <h2>RESPONSIVE</h2>
            <FontAwesomeIcon
              icon={faCode}
              style={{
                fontSize: IconStyle.iconsize,
                color: IconStyle.color.responsive,
              }}
            />
            <p>
              Apps are cool. Expo is helping me to build some awesome native
              apps for Android and Mac
            </p>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="item">
            <h2>DYNAMIC</h2>
            <FontAwesomeIcon
              icon={faSitemap}
              style={{
                fontSize: IconStyle.iconsize,
                color: IconStyle.color.dynamic,
              }}
            />
            <p>
              Apps are cool. Expo is helping me to build some awesome native
              apps for Android and Mac
            </p>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="item">
            <h2>NATIVE</h2>
            <FontAwesomeIcon
              icon={faMobileAlt}
              style={{
                fontSize: IconStyle.iconsize,
                color: IconStyle.color.native,
              }}
            />
            <p>
              Apps are cool. Expo is helping me to build some awesome native
              apps for Android and Mac
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards
