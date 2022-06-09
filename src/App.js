import { Home } from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./components/movieDetail/MovieDetail";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./App.scss"
import { Films } from "./components/film/Films";





function App() {
  return (
    <BrowserRouter> 
    <div className="container-app">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/detail/:id" element={<MovieDetail/>}/>   
        <Route exact path="/films" element={<Films/>}/>
      </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
