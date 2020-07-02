import React from "react"
import footerStyle from "../styles/footer.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons"

const Footer = props => {
  return (
    <div className={footerStyle.footer}>
      <div className={footerStyle.icons}>
        <a
          href="https://www.linkedin.com/in/florian-gaebler-a317aa115/"
          target="blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ fontSize: "70px", padding: "10px" }}
          />
        </a>
        <a href="https://github.com/Gblur" target="blank">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "70px", padding: "10px" }}
          />
        </a>
        <a href="https://gblur.artstation.com/" target="blank">
          <FontAwesomeIcon
            icon={faArtstation}
            style={{ fontSize: "70px", padding: "10px" }}
          />
        </a>
        <a href="mailto:floriangaebler87@gmail.com" target="blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ fontSize: "70px", padding: "10px" }}
          />
        </a>
      </div>
      <div className={footerStyle.disclaimer}>
        <FontAwesomeIcon
          icon={faCopyright}
          style={{
            fontSize: "25px",
            paddingRight: "5px",
            margin: "5px 0px",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        ></FontAwesomeIcon>
        <p>2020 Florian Gaebler</p>
      </div>
      <Link to="/impressum" style={{ textDecoration: "none" }}>
        <p
          style={{
            textShadow: "0px 0px 2px black",
          }}
        >
          Impressum | Datenschutz
        </p>
      </Link>
    </div>
  )
}

export default Footer
