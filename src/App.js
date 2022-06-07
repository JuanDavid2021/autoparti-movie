import { Home } from "./components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./components/movieDetail/MovieDetail";





function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/detail/:id" element={<MovieDetail/>}/>   
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
