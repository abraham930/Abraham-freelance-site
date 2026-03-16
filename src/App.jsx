import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Portfolio from './components/Portfolio'
import HowIHelp from './components/HowIHelp'
import Services from './components/Services'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <HowIHelp />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
