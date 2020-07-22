import React from "react"
// const Layout = require("./src/components/layout").default
import { ThemeProvider } from "styled-components"
import light from "../src/styles/themes/light"

export function wrapRootElement({ element, props }) {
  return (
    <ThemeProvider {...props} theme={light}>
      {element}
    </ThemeProvider>
  )
}
