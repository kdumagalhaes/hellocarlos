//components
// import { Wip } from './components/WIP/Wip'
import { GlobalStyles } from './GlobalStyles'

//assets
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './themes/default'
import { HeaderNav } from './components/Header/HeaderNav'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <HeaderNav />
   {/* <Wip /> */}
   <GlobalStyles />
   </ThemeProvider>
  )
}

export default App
