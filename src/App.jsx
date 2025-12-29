import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import About from '../Components/About/About'
import Project from '../Components/Projects/Project'
import Contact from '../Components/Contact Area/contact'
import Footer_sec from '../Components/Footer/footer'
import Achievements from '../Components/Achievements/Achievements'
import Certificate from '../Components/Certificates/certificate'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

//we have to import jsx file from components folder

const App = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Project />
      <Achievements />
      <Certificate />
      <Contact />
      <Footer_sec />
      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/> }/>
      <Route path='/achievement' element={<Achievements/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/footer' element={<Footer_sec/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}
export default App