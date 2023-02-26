
import MainContent from './containers/MainContent'
import Sidebar from './containers/Sidebar'

import './styles/components/app.sass'

function App() {

  return (
    <div id="portfolio">
      <h1>Hugo Aguiar</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
