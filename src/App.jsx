import { MoviesGrid } from './Components/MoviesGrid'
import { LandingPage } from './Pages/LandingPage';
import { MovieDetails } from './Pages/MovieDetails';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import SobreNosotros from './Components/SobreNosotros';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

export function App() {
  

  return (
    <Router>
      <header>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router> 
   
  )
}

