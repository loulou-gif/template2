import '../assets/Css/Styles.css'
import naruto from '../assets/Img/naruto2.jpg'
import natsu from '../assets/Img/natsu3.png'
import luffy from '../assets/Img/luffy.jpg'
import ken from '../assets/Img/ghoul.jpg'
function Section1() {
    return(
        <section className="section1 lg:flex border lg:justify-center md:justify-evenly ">
            <div className="box border   rounded-md bg-white ml-10 -mt-52 ">
                <div className='flex justify-center mt-10'>
                    <img alt="naruto" className="second-cercle   " src={naruto} /> 
                </div>
                <h3 className='text-3xl mt-14 font-bold w-full text-center'>Naruto</h3>
                <p className='w-full  text-center mt-10  text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border   rounded-md bg-white ml-10 lg:ml-20 mt-10 lg:-mt-52">
                <div className='flex justify-center mt-10'><img alt="naruto" className="second-cercle     " src={luffy} /></div>
                <h3 className='text-3xl mt-14 font-bold w-full text-center'>Luffy</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border   rounded-md bg-white ml-10 lg:ml-20 mt-10 lg:-mt-52">
                <div className='flex justify-center mt-10'><img alt="naruto" className="second-cercle     " src={natsu} /></div>
                <h3 className='text-3xl mt-14 font-bold w-full text-center'>Natsu</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border   rounded-md bg-white ml-10 lg:ml-20 mt-10 lg:-mt-52">
                <div className='flex justify-center mt-10'><img alt="naruto" className="second-cercle    " src={ken} /></div>
                <h3 className='text-3xl mt-14 font-bold w-full text-center'>Kaneki-ken</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
        </section>
    )
    
}

export default Section1