import { HashRouter as Router, Routes, Route, Link, useLocation, useResolvedPath } from 'react-router-dom';
import './App.css';
import Background from './Components/Background/Background';
import Sidebar, { SidebarItem } from './Components/Sidebar/Sidebar';
import HomePage from './Page/Home/Home';
import Cooking from './Page/Cooking/Cooking';
import { Home, LayoutDashboard, CookingPot } from 'lucide-react';

function Hello() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {

  return (
    <Router>
      <Background>
        <div className="flex">
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text={"Dashboard"} link={"/"} />
            <SidebarItem icon={<Home size={20} />} text={"Home"} link={"/home"} />
            <SidebarItem icon={<CookingPot size={20} />} text={"Cooking"} link={"/cooking"} />
          </Sidebar>
          <div id="bigRoundPanel" className='m-4 w-screen rounded-lg bg-white'>
            <Routes>
                <Route path="/" element={<Hello />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cooking" element={<Cooking />} />
            </Routes>
          </div>
        </div>
      </Background>
    </Router>
  );
}
