import section2 from "../assets/Img/banner.png"

function Section2() {
    return(
        <section className="section2 bg-red-50 flex ">
            <img alt="anime" className="w-6/12 bg-gray-200" src={section2} />          
            <div className="w-6/12  mt-10">
                <div className="min-box p-5 w-2/4 ">
                    <h3 className='text-3xl mt-20 font-bold w-full'>Naruto</h3>
                    <p className='w-full  mt-10  text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                </div>
                <div className="min-box flex h-2/4  ">
                    <div className="w-6/12  p-5">                    
                        <h3 className='text-3xl mt-20 font-bold w-full'>Naruto</h3>
                        <p className='w-full  mt-10  text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                    <div className="min-box w-6/12  p-5">
                        <h3 className='text-3xl mt-20 font-bold w-full'>Naruto</h3>
                        <p className='w-full  mt-10  text-xl italic text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</p>
                    </div>     
                </div>  
            </div>          
        </section>
    )
    
}

export default Section2