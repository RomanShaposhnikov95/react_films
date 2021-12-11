import './Header.css'
import {NavLink, Outlet} from "react-router-dom";
import {Footer} from "../Footer/Footer";
import {AiOutlineHome} from "react-icons/all";
import {Suspense} from "react";
import {Preloader} from "../Preloader/Preloader";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Search from "../Search/Search";


export const Header = () => {
    return (
       <div className='App'>
           <div className="appContainer">
               <div className='header'>
                   <h1 className="logo">React films</h1>
                   <Search/>
                   <ul className="menu">
                       <NavLink to='/' className='menuItem'>Home<AiOutlineHome/></NavLink>
                   </ul>
               </div>
              <div className="main">
                  <Suspense fallback={<Preloader/>}>
                      <ErrorBoundary>
                          <Outlet/>
                      </ErrorBoundary>
                  </Suspense>
              </div>
               <Footer/>
           </div>
       </div>
    )
}