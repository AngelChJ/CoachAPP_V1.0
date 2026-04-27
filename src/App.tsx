import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WorkoutSession from './pages/WorkoutSession';
import Historial from './pages/record'; // <-- IMPORTA EL NUEVO COMPONENTE
import Perfil from './pages/Perfil'; // <-- IMPORTA EL PERFIL

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/session" element={<WorkoutSession />} />
        <Route path="/perfil" element={<Perfil />} /> {/* <-- 2. AGREGA ESTA RUTA */}
        <Route path="/record" element={<Historial />} /> {/* <-- AGREGAR ESTA LÍNEA */}
      </Routes>
    </Router>
  );
}

export default App;