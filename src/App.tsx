// components
import { Hero } from './components/Hero/Hero'
// import { Wip } from './components/WIP/Wip'
import { GlobalStyles } from './GlobalStyles'

// assets
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { HeaderNav } from './components/Header/HeaderNav'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderNav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      {/* <Wip /> */}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
