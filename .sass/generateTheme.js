const { readdirSync } = require("fs")

const THEME_PATH = "./src/styles/theme"

const theme = () => {
  const getFilesFromTheme = readdirSync(THEME_PATH, { encoding: "utf-8" })
  const files = getFilesFromTheme

  const filesFormatted = files.map((file) => {
    return `@use "@/styles/theme/${file}" as *;`
  })

  return filesFormatted
}

module.exports = {
  theme
}
