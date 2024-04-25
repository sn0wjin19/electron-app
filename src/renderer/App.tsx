import { HashRouter as Router, Routes, Route, Link, useLocation, useResolvedPath } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Sidebar, { SidebarItem } from './Components/Sidebar/Sidebar';
import HomePage from './Page/Home/Home';
import Cooking from './Page/Cooking/Cooking';
import { Home, LayoutDashboard, CookingPot } from 'lucide-react';

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
            <SidebarItem icon={<Home size={20} />} text={"Home"} link={"/home"} />
            <SidebarItem icon={<CookingPot size={20} />} text={"Cooking"} link={"/cooking"} />
          </Sidebar>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cooking" element={<Cooking />} />
          </Routes>
        </div>
      </Background>
    </Router>
  );
}
