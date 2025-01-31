import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Tour from './pages/Tour'
import Account from './pages/Account'
import ErrorPage from './components/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<Signup />} />
            <Route path='account' element={<Account />} />
            <Route path='tour' element={<Tour />} />
            <Route path='*' element={<ErrorPage msg={"Page Not Found"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
