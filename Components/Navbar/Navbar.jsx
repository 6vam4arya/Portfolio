import {React,useState} from 'react'


import './Navbar.css'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  return (
    <div className='navbar' id="HOME">
        {/* <img src={logo} alt="" /> */}
        <ul className="nav-menu">
            <a className="anchor" offset={50} href="#PROFILE"><li onClick={()=>{setMenu("home")}} style={menu=="home"?{borderBottom: "2px solid #84bdcf", transition: "0.5s", transform:"scale(1.15)"}:{}}>Home</li></a>
            <a className="anchor" offset={50} href="#ABOUT"><li onClick={()=>{setMenu("about-me")}} style={menu=="about-me"?{borderBottom: "2px solid #84bdcf", transition: "0.5s", transform:"scale(1.15)"}:{}}>About Me</li></a>
            <a className="anchor" offset={50} href="#PROJECT"><li onClick={()=>{setMenu("projects")}}  style={menu=="projects"?{borderBottom: "2px solid #84bdcf", transition: "0.5s", transform:"scale(1.15)"}:{}}>Projects</li></a>
            {/* <a className="anchor" offset={50} href="#ACHIEVEMENT"><li onClick={()=>{setMenu("achievements")}} style={menu=="achievements"?{borderBottom: "2px solid #84bdcf", transition: "0.5s", transform:"scale(1.15)"}:{}}>Achivements</li></a> */}
            <a className="anchor" offset={50} href="#CONTACT"><li onClick={()=>{setMenu("contacts")}} style={menu=="contacts"?{borderBottom: "2px solid #84bdcf", transition: "0.5s", transform:"scale(1.15)"}:{}}>Contact Me</li></a>
        </ul>
        {/* <div className="nav-connect">Connect with Me</div> */}
    </div>
  )
}
// #id in href --> take to element on same page whose ID is id
export default Navbar