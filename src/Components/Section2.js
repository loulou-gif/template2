// import section2 from "../assets/Img/banner.png"
import pull1 from '../assets/Img/pull1.jpg'

function Section2() {
    return(
        <section className="section2 bg-red-50 flex  ">
            <img alt="anime" className="anime lg:w-6/12 bg-gray-500" src={pull1} />          
            <div className="complete lg:w-8/12 w-full bg-wh border  lg:mt-40">
                <div className="mini-box mt-20 md:w-6/12   p-5 ">
                    <h3 className='text-3xl  lg:mt-20 mt-5  font-bold w-full'>Naruto</h3>
                    <p className='w-full  mt-5  italic text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices</p>
                </div>
                <div className=" lg:flex h-1/4   ">
                    <div className="inside lg:w-6/12 md:w-6/12  lg:mt-10   p-5">                    
                        <h3 className='text-3xl mt-5 font-bold  w-full'>Naruto</h3>
                        <p className='w-full  mt-10   italic text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                    <div className="inside  lg:w-6/12 md:w-6/12   lg:mt-10 p-5">
                        <h3 className='text-3xl mt-5 font-bold w-full'>Naruto</h3>
                        <p className='w-full  mt-10   italic text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                </div>  
            </div>          
        </section>
    )
    
}

export default Section2