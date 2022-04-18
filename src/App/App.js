import './App.css'
import BrandHeader from '../components/BrandHeader/BrandHeader'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import HeroArea from '../components/HeroArea/HeroArea'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import NotFound from '../components/NotFound/NotFound'
import Checkout from '../components/Checkout/Checkout'
import { ToastContainer } from 'react-toastify'
import ConfirmCheckOut from '../components/ConfirmCheckOut/ConfirmCheckOut'
import Testimonial from '../components/Testimonials/Testimonial'
import Blogs from '../components/Blogs/Blogs'
import About from '../components/About/About'

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
              <Testimonial />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/checkout/:id"
          element={
            <>
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/checkout/confirm-checkout/:name"
          element={
            <>
              <RequireAuth>
                <ConfirmCheckOut />
              </RequireAuth>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
