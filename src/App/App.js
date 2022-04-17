import './App.css'
import BrandHeader from '../components/BrandHeader/BrandHeader'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import HeroArea from '../components/HeroArea/HeroArea'

function App() {
  return (
    <div>
      <BrandHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroArea />
              <Services />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
