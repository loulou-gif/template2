import '../assets/Css/Styles.css'
import { IoMdMenu } from "react-icons/io";
function Headers() {
    return(
        <header className="header  bg-gray-300">
            <div className='social-network flex justify-between bg-white pl-5 -pr-5 border'>
                <h1 className='text-2xl pt-3 text-red-500 font-extrabold'>OTAK'UNIVERS</h1>
                <div className='flex justify-end '>
                    <div className='cercle bg-red-100 '></div>
                    <div className='cercle bg-red-100'></div>
                    <div className=' cercle bg-red-100'></div>
                </div>
            </div>
            <nav className='nav-bar flex justify-between  w-10/12 mt-10  p-5 text-3xl'>
                <h1 className='text-white  pl-20 w-5/12 font-extrabold'>OTAK'UNIVERS</h1>
                <IoMdMenu className='text-white border text-5xl'/>
            </nav>
            <div className='title border text-white mt-24 w-9/12'>
                <h1 className='text-3xl font-extrabold'>L'univers des OTAKU vous ouvres ses portes.</h1>
                <p className='mt-10 text-5xl font-bold w-5/12'>Découvrez l'énergie infinie de la culture animé et manga japonaise. Un monde d'émotions intenses et de créativité débordante vous attend!</p>
            </div>
        </header>
    )
    
}

export default Headers