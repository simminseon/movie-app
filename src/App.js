import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Home from "./components/Home/Home";
import MovieDetail from "./components/movieApp/MovieDetail";
import MovieApp from "./components/movieApp/MovieApp";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movieApp" element={<MovieApp />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
