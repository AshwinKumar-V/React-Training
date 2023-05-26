// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <div className='d-flex flex-row justify-content-between menu_content_wrapper'>
        <Menu />
        <Content name="Ashwin" favoriteMovies={['Inception', 'Interstellar', 'Tenet', 'Oppenheimer']} />
      </div>
      <Footer />
    </>
  )
}

export default App
