import './Header.css'
import {NavLink, Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer";



export const Header = () => {
    return (
       <div className='App'>
           <div className="appContainer">
               <div className='header'>
                   <h1 className="logo">React films</h1>
                   <ul className="menu">
                       <NavLink to='/' className='menuItem'>Home</NavLink>
                       <li className='menuItem'>menu2</li>
                       <li className='menuItem'>menu3</li>
                   </ul>
               </div>
               <Outlet/>
               <Footer/>
           </div>
       </div>
    )
}