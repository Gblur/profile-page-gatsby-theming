import React from "react"
import footerStyle from "../styles/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = props => {
  return (
    <div className={footerStyle.footer}>
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
    </div>
  )
}

export default Footer
