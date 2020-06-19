import React from "react"
import footerStyle from "../styles/footer.module.scss"
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
          style={{ fontSize: "25px", padding: "3px" }}
        ></FontAwesomeIcon>
        <p>2020 Florian Gaebler</p>
      </div>
    </div>
  )
}

export default Footer
