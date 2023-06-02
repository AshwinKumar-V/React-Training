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
import { AddUser } from './components/AddUser'
import { AddClient } from './components/AddClient'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path='clients' element={<List listType="clients" />} />
            <Route path='clients/:id' element={<Details />} />
            <Route path='clients/add-client' element={<AddClient />} />
            <Route path='users' element={<List listType="users" />} />
            <Route path='users/:id' element={<Details />} />
            <Route path='users/add-user' element={<AddUser />} />
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
