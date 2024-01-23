import '../assets/Css/Styles.css'
function Headers() {
    return(
        <header className="header  bg-gray-300">
            <div className='social-network flex justify-between bg-white pl-5 -pr-5 border'>
                <h1 className='text-2xl pt-3 text-red-500 font-extrabold'>Titre</h1>
                <div className='flex justify-end '>
                    <div className='cercle bg-red-100 '></div>
                    <div className='cercle bg-red-100'></div>
                    <div className=' cercle bg-red-100'></div>
                </div>
            </div>
            <nav className='nav-bar text-3xl'>
                <h1>TiTRE</h1>
            </nav>
        </header>
    )
    
}

export default Headers