// Sidebar.js
import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const SideMenu = ({ open, setOpen }) => {
    const closeSidebar = () => {
        setOpen(false);
    };
    return (
        <div className={`sidemenu text-3xl flex justify-end flex-col-reverse text-white ${open ? 'active duration-500 ' : 'inactive '}`}>
            
            <ul>
                <li className='hover:text-blue-600 '><Link to="/">HOME</Link></li>
                {/* Ajoutez d'autres liens de la barre latérale au besoin */}
            </ul>
            <div className='flex justify-end'><button className='bouton h-10'><RxCross1 className='border' onClick={closeSidebar}/></button></div>
        </div>
    );
}

export default SideMenu;
