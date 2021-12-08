import './App.css';
import {Header} from "./components/Header/Header";
import {Slider} from "./components/Slider/Slider";
import {AllFilms} from "./components/AllFIlms/AllFilms";
import {FilmInfo} from "./components/FilmInfo/FilmInfo";
import {NotFound} from "./components/Pages/NotFound";
import {Preloader} from "./components/Preloader/Preloader";
import {ServerError} from "./components/Pages/ServerError";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";

function App() {
  return (
      <Routes>
          <Route path='/' element={<Header/>}>
              <Route index element={<HomePage/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/films' element={<AllFilms/>}/>
              <Route path='/about' element={<FilmInfo/>}/>
          </Route>
      </Routes>
  );
}

export default App;
