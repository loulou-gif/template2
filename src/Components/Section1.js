import '../assets/Css/Styles.css'
import naruto from '../assets/Img/naruto2.jpg'
import natsu from '../assets/Img/natsu3.png'
import luffy from '../assets/Img/luffy.jpg'
import ken from '../assets/Img/ken.jpg'
function Section1() {
    return(
        <section className="section1 flex justify-center">
            <div className="box border w-2/12  rounded-md bg-white ml-10 -mt-52 ">
                <img alt="naruto" className="second-cercle w-52 h-52 mt-16 ml-16 bg-gray-200 " src={naruto} />
                <h3 className='text-3xl mt-20 font-bold w-full text-center'>Naruto</h3>
                <p className='w-full  text-center mt-10  text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border w-2/12  rounded-md bg-white ml-20 -mt-52">
                <img alt="naruto" className="second-cercle w-52 h-52 mt-16 ml-16 bg-gray-200 " src={luffy} />
                <h3 className='text-3xl mt-20 font-bold w-full text-center'>Luffy</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border w-2/12  rounded-md bg-white ml-20 -mt-52">
                <img alt="naruto" className="second-cercle w-52 h-52 mt-16 ml-16 bg-gray-200 " src={natsu} />
                <h3 className='text-3xl mt-20 font-bold w-full text-center'>Natsu</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
            <div className="box border w-2/12  rounded-md bg-white ml-20 -mt-52">
                <img alt="naruto" className="second-cercle w-52 h-52 mt-16 ml-16 bg-gray-200 " src={ken} />
                <h3 className='text-3xl mt-20 font-bold w-full text-center'>Kaneki-ken</h3>
                <p className='w-full  text-center mt-10 text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
            </div>
        </section>
    )
    
}

export default Section1