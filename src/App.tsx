import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { SkipLink } from './components/layout/SkipLink'
import { About } from './components/sections/About'
import { Hero } from './components/sections/Hero'

function App() {
  return (
    <>
      <SkipLink />
      <div id="top" />
      <Nav />
      <main id="main">
        <Hero />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
