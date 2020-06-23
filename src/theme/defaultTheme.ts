import { space } from "./space"
import { colors } from "./themeColors"
import { Theme } from "styled-system"

export const breakpoints: string[] = ["319px", "424px", "767px", "1023px"]

export const defaultTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints: breakpoints,
  colors: {
    ...colors,
  },
}

export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...colors,
  },
}
