import './App.css'
import Alert from './components/Alert/Alert'
import { useRoutes, Link } from 'react-router-dom'
import routes from './routes'

function App() {

  let router = useRoutes(routes)

  return (
    <>
      <div className="main">
        {router}
      </div>
    </>
  )
}

export default App
