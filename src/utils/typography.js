import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
import fairy from "typography-theme-fairy-gates"

const fairytheme = new Typography(fairy)
const kirkham = new Typography(kirkhamTheme)

export const rhythm = kirkhamTheme.rhythm
export default fairytheme
