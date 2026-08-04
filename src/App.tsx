import { Footer } from './components/layout/Footer'
import { Nav } from './components/layout/Nav'
import { SkipLink } from './components/layout/SkipLink'

function App() {
  return (
    <>
      <SkipLink />
      <div id="top" />
      <Nav />
      <main id="main">
        <h1 className="sr-only">Abdallah El Hamawi — Software Engineer</h1>
      </main>
      <Footer />
    </>
  )
}

export default App
