import {
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationThemeType,
} from "@react-navigation/native"
import { color } from "./color"

const NavigationTheme: NavigationThemeType = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    text: color.text,
    background: color.background,
    primary: color.primary,
    notification: color.error,
  },
}
export const AppDefaultTheme = undefined
