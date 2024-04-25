import { HashRouter as Router, Routes, Route, Link, useLocation, useResolvedPath } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Sidebar, { SidebarItem } from './Components/Sidebar/Sidebar';
import Home from './Page/Home/Home';
import { Camera, LayoutDashboard } from 'lucide-react';

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
  // const dashboardMatch = useRouteMatch("/");

  return (
    <Router>
      <Background>
        {/* <NavBar /> */}
        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text={"Dashboard"} link={"/"} />
            <SidebarItem icon={<Camera size={20} />} text={"Home"} link={"/home"} />
          </Sidebar>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Background>
    </Router>
  );
}
