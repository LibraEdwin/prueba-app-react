import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaNoEncontrada } from "./components/PaginaNoEncontrada";
import { Auth } from "./pages/Auth";
import { Menu } from "./pages/Menu";
import { Pelicula } from "./pages/Pelicula";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/menu" element={<Menu />} />
          <Route path={'/menu/pelicula/0'} element={<Pelicula number='1' />} />
          <Route path={'/menu/pelicula/1'} element={<Pelicula number='2' />} />
          <Route path={'/menu/pelicula/2'} element={<Pelicula number='3' />} />
          <Route path={'/menu/pelicula/3'} element={<Pelicula number='6' />} />
          <Route path={'/*'} element={<PaginaNoEncontrada/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
