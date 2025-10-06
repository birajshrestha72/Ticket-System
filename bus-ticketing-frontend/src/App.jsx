import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import Landing from './pages/common/Landing.jsx'
import Login from './pages/common/Login.jsx'
import Signup from './pages/common/Signup.jsx'
import Booking from './pages/customer/Booking.jsx'
import Profile from './pages/customer/Profile.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import BusManagement from './pages/admin/BusManagement.jsx'
import BookingManagement from './pages/admin/BookingManagement.jsx'
import UserManagement from './pages/admin/UserManagement.jsx'

function App() {

  return (
    <Router>
      <Header />
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/buses" element={<BusManagement />} />
          <Route path="/admin/bookings" element={<BookingManagement />} />
          <Route path="/admin/users" element={<UserManagement />} />  
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
