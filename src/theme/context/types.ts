export enum Themes {
  Dark = "dark",
  Light = "light",
  Medium = "medium",
}

export interface ThemeContextProps {
  theme: Themes
  toggleTheme: () => void
}
