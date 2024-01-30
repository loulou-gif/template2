import sangoku from '../assets/Img/sangoku.jpg'
import hunter from '../assets/Img/hunter.jpg'
import netero from '../assets/Img/netero.jpg'
import ghoul from '../assets/Img/ghoul.jpg'
import school from '../assets/Img/sd.jpg'
import sangoku2 from '../assets/Img/sangoku2.jpg'
import hunter2 from '../assets/Img/hunter2.jpg'
import netero2 from '../assets/Img/netero2.jpg'



function Section4() {
    return(
        <section className="section4 lg:mb-10 bg-white ">
            <div className="lg:flex ml:flex    p-5 w-full h-full">
                <div className="lg:w-6/12 ml:w-6/12   w-full bg-white p-5">
                    <div className="md:flex lg:flex flex-row  lg:justify-evenly w-full max-h-full lg:h-2/4">   
                        <img alt='' src={sangoku} className='lg:w-5/12 md:w-5/12 '/>
                        <img alt='' src={hunter} className='lg:w-5/12 md:w-5/12'/>
                    </div>
                    <div className="md:flex lg:flex  lg:justify-evenly w-full h-3/4 lg:h-2/4  mt-5">   
                        <img alt='' src={netero} className='lg:w-5/12'/>
                        <img alt='' src={ghoul} className='lg:w-5/12 md:w-5/12'/>
                    </div>
                </div>
                <div className="lg:w-6/12 ml:w-6/12  w-full bg-white p-5">
                    <div className="md:flex lg:flex flex-row  lg:justify-evenly w-full max-h-full lg:h-2/4">   
                        <img alt='' src={hunter2} className='lg:w-5/12 md:w-5/12'/>
                        <img alt='' src={sangoku2} className='lg:w-5/12 md:w-5/12'/>
                    </div>
                    <div className="md:flex lg:flex  lg:justify-evenly w-full h-3/4 lg:h-2/4  mt-5">   
                        <img alt='' src={school} className='lg:w-5/12'/>
                        <img alt='' src={netero2} className='lg:w-5/12 md:w-5/12'/>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Section4