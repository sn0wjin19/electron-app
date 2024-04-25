import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Background from './Background/Background';
import Sidebar from './Sidebar/Sidebar';
function Hello() {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Background>
        {/* <NavBar /> */}
        <div className="flex">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Hello />} />
          </Routes>
        </div>
      </Background>
    </Router>
  );
}
