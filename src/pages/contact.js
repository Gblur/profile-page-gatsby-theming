import React from "react"
//styles
import Layout from "../components/layout"
import layoutStyle from "../styles/layout.module.scss"
//resources
import profilePic from "../constants/profileContent/Profilepic.jpg"
import skillData from "../constants/profileContent/data"
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as brands from "@fortawesome/free-brands-svg-icons"
import {
  faCircle,
  faGraduationCap,
  faHammer,
  faFlask,
  faLanguage,
  faEnvelope,
  faHome,
  faGlobe,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons"
import * as regularSvg from "@fortawesome/free-regular-svg-icons"
import links from "../constants/profileContent/links"

export default function Contact() {
  const headline1 = string => {
    return string.toUpperCase()
  }

  const FaIcon = icon => {
    return <FontAwesomeIcon icon={icon} style={{ margin: "0px 5px" }} />
  }

  const skillLevelDisplay = rating => {
    return Array.from({ length: 5 }, (_, i) => (
      <FontAwesomeIcon
        key={i}
        icon={i < rating ? faCircle : regularSvg.faCircle}
        fill="false"
        color="white"
        aria-hidden="true"
      />
    ))
  }

  return (
    <div>
      <div className={layoutStyle.layoutProfileHeader}>
        <div display="block">
          <h2>
            FLORIAN
            <br /> GAEBLER
          </h2>
        </div>
        <div>
          <div className={layoutStyle.layoutProfileHeaderRow}>
            <a target="blank" href="mailto:floriangaebler87@gmail.com">
              {FaIcon(faEnvelope)}
            </a>
            <p> floriangaebler87@gmail.com</p>
          </div>
          <div className={layoutStyle.layoutProfileHeaderRow}>
            <a href="#">{FaIcon(faHome)}</a>
            <p> 19258 Boizenburg, Germany</p>
          </div>
          <div className={layoutStyle.layoutProfileHeaderRow}>
            <a target="blank" href="https://homepage-8c4c9.web.app/">
              {FaIcon(faGlobe)}
            </a>
            <p>Homepage</p>
          </div>
          <span></span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            justifyContent: "space-evenly",
          }}
        >
          <a target="blank" href={links.linkGitHub}>
            {FaIcon(brands.faGithub)}
          </a>
          <a target="blank" href={links.linkLinkedIn}>
            {FaIcon(brands.faLinkedin)}
          </a>
          <a target="blank" href={links.linkArtstation}>
            {FaIcon(brands.faArtstation)}
          </a>
        </div>
      </div>
      <img
        src={profilePic}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "4px solid white",
          position: "absolute",
          top: "12px",
          right: "25px",
        }}
      />
      <Layout className={layoutStyle.layoutProfile}>
        <div className={layoutStyle.leftSide}>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faPortrait)}
              {headline1("profile")}
            </h2>
            <div className={layoutStyle.layoutProfileContentRow}>
              <ul>
                <li>
                  Web developer with a graphics and game design background.
                </li>
                <li>
                  Experienced in project planning and remote collaborations.
                </li>
                <li>Interested in web and native app development.</li>

                <li>
                  OS and Tools: Linux, Git, VS Code, Gatsby, Expo, Android SDK,
                  Firebase, Figma
                </li>
              </ul>
            </div>
          </div>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faHammer)}
              {headline1("work exp")}
            </h2>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>3D Generalist</h5>
              <h5>Freelancer</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Florian Gaebler</p>
              <p>07/2020 - today</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>3D Texture Artist</h5>
              <h5>Freelancer</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Benjamin Szpighler, remote</p>
              <p>07/2019 - 09/2019</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Plotter service</h5>
              <h5>Employee</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>U Guenther GmbH, Hamburg</p>
              <p>07/2017 - 09/2019</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Unity Developer</h5>
              <h5>Collaboration</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Bernd Limberg, remote</p>
              <p>01/2018 - 04/2018</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Unity Developer</h5>
              <h5>Collaboration</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Vincent Zurvesten, remote</p>
              <p>02/2017 - 06/2017</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>IT-Soldier</h5>
              <h5>Soldier</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Reconnaissance Btl, Lueneburg</p>
              <p>07/2010 - 07/2014</p>
            </div>
          </div>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faLanguage)}
              {headline1("Languages")}
            </h2>
            {Object.entries(skillData.languages).map(([key, value]) => {
              return (
                <div className={layoutStyle.layoutProfileContentRow}>
                  <div className={layoutStyle.layoutItem}>
                    <p>{key}</p>
                  </div>
                  {skillLevelDisplay(value)}
                </div>
              )
            })}
          </div>
        </div>
        <div className={layoutStyle.rightSide}>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faGraduationCap)}
              {headline1("education")}
            </h2>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Full stack Web developer</h5>
              <h5> Bootcamp</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Le Wagon, Berlin</p>
              <p> 01/2020 - 03/2020</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>3D artist </h5>
              <h5>Distance learning</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>ILS, Hamburg </p>
              <p> 03/2015 - 06/2016</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Hotel manager</h5>
              <h5>Apprenticeship</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Hotel Frankenhorst, Schwerin </p>
              <p> 11/2005 - 08/ 2008</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>School degree</h5>
              <h5>B-Level</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Elbe Gymnasium</p>
              <p> 07/1997 - 07/2005</p>
            </div>
          </div>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faGraduationCap)}
              {headline1("Certificates")}
            </h2>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>Unity</h5>
              <h5>Game Design</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>Indisoft, Berlin</p>
              <p>4 weeks, 11/2016</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>After FX</h5>
              <h5>Post FX</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>IBB, Lueneburg</p>
              <p>2 weeks, 06/2016</p>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <h5>AutoCad</h5>
              <h5>CAD basics</h5>
            </div>
            <div className={layoutStyle.layoutProfileContentRow}>
              <p>IBB, Lueneburg</p>
              <p>2 weeks, 02/2015</p>
            </div>
          </div>
          <div className={layoutStyle.layoutProfileContent}>
            <h2>
              {FaIcon(faFlask)}
              {headline1("Skills")}
            </h2>
            {Object.entries(skillData.software).map(([key, value]) => {
              return (
                <div className={layoutStyle.layoutProfileContentRow}>
                  <div className={layoutStyle.layoutItem}>
                    <p>{key}</p>
                  </div>
                  {skillLevelDisplay(value)}
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </div>
  )
}
