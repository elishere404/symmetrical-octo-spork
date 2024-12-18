import { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import Header from './cmp/Header'
import Gallery from './cmp/Gallery'
import Slideshow from './cmp/Slideshow'
import { AppContext } from './context/AppContext'

function App() {
  const { state } = useContext(AppContext) 

  return (
    <div className="min-h-screen flex flex-col leading-deafult">
      <Header />
      <SwitchTransition>
        <CSSTransition key={state.isSlideshow} classNames="fade" timeout={400}>
          {state.isSlideshow ? <Slideshow /> : <Gallery />}
        </CSSTransition>
      </SwitchTransition>
    </div>
  )
}

export default App


