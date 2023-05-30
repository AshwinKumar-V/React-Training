// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import { Layout } from './components/Layout'

function App() {
  const [alertOn, updateAlert] = useState(false)

  return (
    <>
      {alertOn ? <Alert alertMessage="You're subscription is almost expiring!" updateAlert={updateAlert} /> : null}
      <Navbar alertText="Notification" updateAlert={updateAlert} />
      <Header />
      <div className='d-flex flex-row justify-content-between menu_content_wrapper'>
        <Menu />
        <Content name="Ashwin" favoriteMovies={['Inception', 'Interstellar', 'Tenet', 'Oppenheimer']} />
      </div>
      <Footer />

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<About />} />
            <Route path='/About' element={<About />} />
            <Route path='/ContactUs' element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
