import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Style from './components/Style';
import Artist from './components/Artist';
import Studio from './components/Studio';
import Admin from './components/Admin';
import StyleAdmin from './components/StyleAdmin';
import ArtistAdmin from './components/ArtistAdmin';
import StudioAdmin from './components/StudioAdmin';


function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="styles" element={<Style />} />
      <Route path="artists" element={<Artist />} />
      <Route path="studios" element={<Studio />} />
      <Route path="admin" element={<Admin />} />
      <Route path="styles-admin" element={<StyleAdmin />} />
      <Route path="artists-admin" element={<ArtistAdmin />} />
      <Route path="studios-admin" element={<StudioAdmin />} />
    </Routes>

  </BrowserRouter>
  );
}

export default App;
