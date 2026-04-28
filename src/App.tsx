import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import WorkoutSession from './pages/WorkoutSession';
import Record from './pages/Record';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/session" element={<WorkoutSession />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/record" element={<Record />} />
      </Routes>
    </Router>
  );
}

export default App;