import otaku from '../assets/Img/otaku.jpg'

function Section5() {
    return(
        <section className="section5 mt-40 lg:mt-5 md:mt-40 w-full flex p-5">
            <div className="lg:w-6/12  w-full  flex justify-center bg-white ">
                <div className="lg:mt-40 mt-10 md:w-10/12 lg:w-10/12 ">
                    <h2 className="lg:text-2xl md:text-2xl text-xl font-extrabold mt-5">Restez à jours sur les dates importantes</h2>
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-5">Les évenement qui marquerons l'année 2024?</h3>
                    <p className="lg:text-2xl md:text-2xl text-xl font-serif text-gray-400 mt-10">
                        1. Les informations sur les animes et manga en temps et en heures<br/>
                        2. La diffusion de lien pour vous guider vers les animes en question<br/>
                        3. Les évenement de conventions en afrique<br/>
                        4. La vente de tenu cosplay<br/>
                        5. Un chanel d'échange avec toutes une communautés fan d'anime et de pop culture comme vous
                    </p>
                </div>
            </div>
            <img className="anime w-6/12 md:display" alt="" src={otaku}/>
        </section>
    )
    
}

export default Section5