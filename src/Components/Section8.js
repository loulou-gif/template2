import '../assets/Css/Styles.css'

function Section8() {
    return(
        <section className="section8 flex flex-col md:flex-row lg:flex-row p-10 bg-black text-white">
            <div className="lg:w-6/12 w-3/12 md:w-6/12 h-full  flex md:justify-center lg:justify-center md:items-center lg:items-center">
                <div className='text-xl lg:text-3xl lg:p-5 md:p-5'>
                    <p className='text-gray-300 font-semibold border-b-4 pb-3'>GHJKJHGHNBFGBVBVG</p>
                    <p className='text-xl pt-3'>Contact: +225 07 98 39 57 74</p>
                    <p className='text-xl pt-3'>TEXT: dolor sit amet, consectetur adipiscing</p>
                </div>
            </div>            
            <div className="h-full  flex lg:justify-center md:justify-center md:items-center lg:items-center  ">
                <iframe title='map' className='h-3/6 lg:w-7/12 md:w-6/12 w-11/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.31823678591!2d-3.9558710259081797!3d5.368339835510069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb687564e241%3A0xad68bfef48b8dcf3!2zU2ltcGxvbiBDw7R0ZSBk4oCZSXZvaXJl!5e0!3m2!1sfr!2sci!4v1706205425367!5m2!1sfr!2sci" 
                    allowfullscreen="" 
                    // width="200"
                    height="400"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" 
                    style={{border:0}}
                    >
                </iframe>
            </div>             
        </section>
    )
    
}

export default Section8