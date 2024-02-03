// import section2 from "../assets/Img/banner.png"
import pull1 from '../assets/Img/pull1.jpg'

function Section2() {
    return(
        <section className="section2 bg-red-50 flex  ">
            <img alt="anime" className="anime  bg-gray-500" src={pull1} />          
            <div className="complete lg:w-8/12 w-full bg-wh  md:flex md:justify-center md:flex-col md:items-center ">
                <div className="mini-box  md:w-10/12 lg:w-10/12   p-5 ">
                    <h3 className='text-3xl lg:text-5xl  lg:mt-20 mt-5   font-bold w-full'>Naruto</h3>
                    <p className='w-full  mt-5  italic lg:text-2xl  text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices elit nullam nunc justo sagittis suscipit ultrices</p>
                </div>
                <div className="test lg:flex h-1/4 md:flex   md:items-center  md:w-full lg:w-10/12 ">
                    <div className="inside lg:w-full w-full lg:mt-10 md:w-10/12   p-5">                    
                        <h3 className='text-3xl lg:text-5xl  mt-5 font-bold  w-full'>Naruto</h3>
                        <p className='w-full  mt-10 lg:text-2xl  italic text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                    <div className="inside  lg:w-full w-full md:w-10/12  lg:mt-10 p-5">
                        <h3 className='text-3xl lg:text-5xl  mt-5 font-bold w-full'>Naruto</h3>
                        <p className='w-full  mt-10 lg:text-2xl   italic text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                </div>  
            </div>          
        </section>
    )
    
}

export default Section2