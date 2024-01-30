import '../assets/Css/Styles.css'
// import Banner from '../assets/Img/banner.png'
import { IoMdMenu } from "react-icons/io";
function Headers() {
    return(
        <header className="header w-full  bg-gray-300">
            <div className='social-network   flex justify-between bg-white pl-5 -pr-5 '>
                <h1 className='text-2xl pt-3 text-white font-extrabold'>OTAK'UNIVERS</h1>
                <div className='flex justify-end '>
                    <div className='cercle bg-red-100 '></div>
                    <div className='cercle bg-red-100'></div>
                    <div className=' cercle bg-red-100'></div>
                </div>
            </div>
            <nav className='nav-bar  flex justify-between  lg:w-10/12 lg:mt-10  p-5 lg:text-3xl'>
                <h1 className='text-white   w-5/12 font-extrabold'>OTAK'UNIVERS</h1>
                <IoMdMenu className='text-white border text-5xl'/>
            </nav>
            <div className='title   text-white mt-24 lg:w-9/12'>
                <h1 className='lg:text-3xl font-extrabold'>L'univers des OTAKU vous ouvres ses porte.</h1>
                <p className='mt-10 lg:text-5xl md:text-5xl  text-2xl lg:w-5/12 font-bold w-11/12'>Découvrez l'énergies infini de la culture animé et manga japonaise. Un monde d'émotions intenses et de créativité débordante vous attend!</p>
            </div>
        </header>
    )
    
}

export default Headers