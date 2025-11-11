import { Routes, Route } from 'react-router'
import Header from './components/Header'

import MainDashboard from './pages/MainDashboard'
import Analytics from './pages/Analytics'
import Login from './pages/Login'
import AccountInfo from './pages/AccountInfo'
import Signup from './pages/Signup'
import UploadAndManagement from './pages/UploadAndManagement'


function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/maindashboard" element={<MainDashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/login" element={<Login />} />
          <Route path="/AccountInfo" element={<AccountInfo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/uploadandmanagement" element={<UploadAndManagement />} />
      </Routes>
    </>
  )
}

export default App
