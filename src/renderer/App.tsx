import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Background/Background';
import NavBar from './NavBar/NavBar';

function Hello() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Background>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </Background>
    </Router>
  );
}
