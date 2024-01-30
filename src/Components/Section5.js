import otaku from '../assets/Img/otaku.jpg'

function Section5() {
    return(
        <section className="section5  w-full flex p-5">
            <div className="lg:w-6/12  w-full  flex justify-center  bg-white ">
                <div className="lg:mt-40 mt-10 md:w-10/12 lg:w-10/12 ">
                    <h2 className="lg:text-2xl md:text-2xl text-xl font-extrabold mt-5">Valeurs et fonctionnalités</h2>
                    <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold mt-5">Pourquoi nous choisissez-vous ?</h3>
                    <p className="lg:text-2xl md:text-2xl text-xl font-serif text-gray-400 mt-10">
                        1. Interface utilisateur magnifique et facile à comprendre, animations professionnelles<br/>
                        2. Design parfait et code clair livré<br/>
                        3. Présentez vos services avec flexibleu a massa<br/>
                        4. Trouvez plus d'idées créatives pour vos projets<br/>
                        5. Puissance illimitée et possibilités de personnalisation
                    </p>
                </div>
            </div>
            <img className="anime w-6/12" alt="" src={otaku}/>
        </section>
    )
    
}

export default Section5