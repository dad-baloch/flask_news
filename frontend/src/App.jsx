import { Routes, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<NavBar />} />
      </Routes>
    </>
  )
}

export default App
