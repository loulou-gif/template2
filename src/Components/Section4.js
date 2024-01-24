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
        <section className="section4  bg-white ">
            <div className="flex   p-5 w-full h-full">
                <div className="w-6/12 bg-white p-5">
                    <div className="flex justify-evenly w-full h-2/4">   
                        <img alt='' src={sangoku} className='w-4/12'/>
                        <img alt='' src={hunter} className='w-4/12'/>
                    </div>
                    <div className="flex justify-evenly w-full h-2/4  mt-5">   
                        <img alt='' src={netero} className='w-4/12'/>
                        <img alt='' src={ghoul} className='w-4/12'/>
                    </div>
                </div>
                <div className="w-6/12 -l-8 bg-white p-5">
                    <div className="flex justify-evenly w-full h-2/4">   
                        <img alt='' src={hunter2} className='w-4/12'/>
                        <img alt='' src={sangoku2} className='w-4/12'/>
                    </div>
                    <div className="flex justify-evenly w-full h-2/4  mt-5">   
                        <img alt='' src={school} className='w-4/12'/>
                        <img alt='' src={netero2} className='w-4/12'/>
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Section4