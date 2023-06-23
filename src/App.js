import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import EventPage from "./pages/EventPage";
import MovieListPage from "./pages/MovieListPage";
import Main from "./pages/MainPage";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/event"} element={<EventPage />} />
        <Route path={"/movies"} element={<MovieListPage />} />

      </Routes>
  );
}

export default App;
