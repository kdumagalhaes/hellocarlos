//components
import { Wip } from './components/WIP/Wip'
import { GlobalStyles } from './GlobalStyles'

//assets
import {ThemeProvider} from 'styled-components'
import {defaultTheme} from './themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
   <Wip />
   <GlobalStyles />
   </ThemeProvider>
  )
}

export default App
