import React from "react"
import footerStyle from "../styles/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = props => {
  return (
    <div className={footerStyle.footer}>
      <FontAwesomeIcon
        icon={faReact}
        style={{ fontSize: "70px", padding: "10px" }}
      />
      <FontAwesomeIcon
        icon={faGithub}
        style={{ fontSize: "70px", padding: "10px" }}
      />
    </div>
  )
}

export default Footer
