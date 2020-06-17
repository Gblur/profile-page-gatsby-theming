import React from "react"
import Unity, { UnityContent } from "react-unity-webgl"

const UnityApp = () => {
  const unityContent = new UnityContent(
    "/Build/new Build.json ",
    "/Build/UnityLoader.js"
  )

  return <Unity unityContent={unityContent} />
}

export default UnityApp
