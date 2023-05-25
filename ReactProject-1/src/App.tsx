// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <Menu />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
