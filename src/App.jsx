import { GlobalStyle } from './global/GlobalStyle'
import { Router } from './router'
import { Theme } from './global/Theme'

function App() {

  return (
      <>
        <Theme>
          <GlobalStyle/>
          <Router/>
        </Theme>
      </>
  )
}

export default App
