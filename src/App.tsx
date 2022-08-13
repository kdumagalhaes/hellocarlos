// components
import { Hero } from './components/Hero/Hero'
// import { Wip } from './components/WIP/Wip'
import { GlobalStyles } from './GlobalStyles'

// assets
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/default'
import { HeaderNav } from './components/Header/HeaderNav'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderNav />
      <Hero />
      {/* <Wip /> */}
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
