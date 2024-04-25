import * as React from 'react';
import icon from '../../../assets/icon.png';

export default function Sidebar({}) {

  const [expand, setExpand] = React.useState(true);

  const toggleSidebar = () => {
    setExpand(!expand);
  }

  return(
    <div className='w-64 flex flex-col min-h-screen'>
      <div className='bg-red-500 p-4 flex justify-between items-center text-white'>
        <div id="logo">
          <img src={icon} alt='logo' className='w-8 h-8' />
        </div>
        <div id='icon'>
          <button type="button" className='btn btn-info'>收回
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg> */}
          </button>
        </div>
      </div>
      <div className='flex-grow bg-blue-500 p-4 text-white'>222</div>
      <div className='bg-green-500 p-4 text-white'>footer</div>
    </div>
  )
}
