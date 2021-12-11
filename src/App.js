import './App.css';
import {Header} from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import HomePage from "./components/HomePage/HomePage";
import {NotFound} from "./components/Pages/NotFound";
import AllFilms from "./components/AllFIlms/AllFilms";
import FilmInfo from "./components/FilmInfo/FilmInfo";


// const AllFilms = lazy(() => import("./components/AllFIlms/AllFilms"));
// const FilmInfo = lazy(() => import("./components/FilmInfo/FilmInfo"));
// const NotFound = lazy(() => import("./components/Pages/NotFound"));
// const HomePage = lazy(() => import("./components/HomePage/HomePage"));


function App() {
  return (
      <Routes>
          <Route path='/' element={<Header/>}>
              <Route index element={<HomePage/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/films/:category/:num' element={<AllFilms/>}/>
              <Route path='/about/:id' element={<FilmInfo/>}/>
          </Route>
      </Routes>
  );
}

export default App;
