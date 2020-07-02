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
import * as regular from "@fortawesome/free-regular-svg-icons"
import IconStyle from "../constants/iconstyle.js"

const Cards = props => {
  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ number: 4 }}>
          <div className="item">
            <h2>FRONT-END</h2>
            <FontAwesomeIcon
              icon={faCode}
              style={{
                fontSize: IconStyle.iconsize,
                color: IconStyle.color.responsive,
              }}
            />
            <p>
              Despite the fact that I graduated as a full stack developer, my
              priority is in front end development. Mostly with React.
              Javascript and C# are my common used languages.


            </p>
          </div>
        </Col>
        <Col xs={12} lg={4}>
          <div className="item">
            <h2>DYNAMIC</h2>
            <FontAwesomeIcon
              icon={regular.faSurprise}
              style={{
                fontSize: IconStyle.iconsize,
                color: IconStyle.color.dynamic,
              }}
            />
            <p>
              Since there are more possibilities to develop dynamic pages, this
              is where I am most interested in.
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
              Expo is helping me to build native apps for Android
              and Mac.  
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Cards
