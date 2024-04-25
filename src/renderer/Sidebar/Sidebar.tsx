import * as React from 'react';
import icon from '../../../assets/icon.png';

const SidebarContext = React.createContext();

export default function Sidebar({children}) {

  const [expanded, setExpanded] = React.useState(true);

  return (
    <div className='w-64 flex flex-col min-h-screen'>
      <div className='bg-white p-4 flex justify-between items-center'>
        <div id="logo">
          <img src={icon} alt='logo' className='w-auto h-14' />
        </div>
        <div id='icon'>
          <button type="button" className='btn btn-info'>收回
          </button>
        </div>
      </div>
      <div className='flex-grow bg-blue-500 p-4 text-white'>222</div>
      <div className='bg-green-500 p-4 text-white'>footer</div>
    </div>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <ui className='menu'>
      <li className='relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group'>
          {icon}
        </li>
    </ui>
  );
}
