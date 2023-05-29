import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './components/NotFound'
import Overview from './components/Overview'
import List from './components/List'
import Details from './components/Details'
import { About } from './components/About'
import Help from './components/Help'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path='clients' element={<List listType="Client" />} />
            <Route path='clients/:id' element={<Details />} />
            <Route path='users' element={<List listType="User" />} />
            <Route path='users/:id' element={<Details />} />
            <Route path='about' element={<About />} />
            <Route path='help' element={<Help />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
