import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/index.scss';
import About from './pages/About';
import Accueil from './pages/Accueil';
import Tutoriel from './pages/Tutoriel';
import NousSetenir from './pages/NousSetenir';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route  path='/'   element={<Accueil />} />
          <Route  path='/About'   element={<About />} />
          <Route  path='/tutoriel'   element={<Tutoriel />} />
          <Route  path='/noussetenir'   element={<NousSetenir/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
