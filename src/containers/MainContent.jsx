import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import '../styles/containers/maincontent.sass'

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  )
}

export default MainContent