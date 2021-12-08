import './App.css';
import {Header} from "./components/Header/Header";
import {Slider} from "./components/Slider/Slider";
import {AllFilms} from "./components/AllFIlms/AllFilms";
import {FilmInfo} from "./components/FilmInfo/FilmInfo";
import {NotFound} from "./components/Pages/NotFound";
import {Preloader} from "./components/Preloader/Preloader";
import {ServerError} from "./components/Pages/ServerError";

function App() {
  return (
    <div className="App">
      <div className="appContainer">
          <Header/>
          <Slider title={'Top 250'}/>
          <Slider title={'Top 100'}/>
          <Slider title={'Top Await'}/>
          {/*<AllFilms/>*/}
          {/*<FilmInfo/>*/}
          {/*<NotFound/>*/}
          {/*<Preloader/>*/}
          {/*<ServerError/>*/}
      </div>
    </div>
  );
}

export default App;
