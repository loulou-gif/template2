// Sidebar.js
import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const SideMenu = ({ open, setOpen }) => {
    const closeSidebar = () => {
        setOpen(false);
    };
    return (
        <div className={`sidemenu text-3xl text-white ${open ? 'active duration-500' : 'inactive '}`}>
            <RxCross1 className='' onClick={closeSidebar}/>
            <ul>
                <li><Link to="/">HOME</Link></li>
                {/* Ajoutez d'autres liens de la barre latérale au besoin */}
            </ul>
        </div>
    );
}

export default SideMenu;
