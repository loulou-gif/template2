import naruto from "../assets/Img/ns.jpg"
import bleach from "../assets/Img/bleach.jpg"
import foodwar from "../assets/Img/fw.png"
import demonSlayer from "../assets/Img/kny.jpg"
function Section3() {
    return(
        <section className="section3 bg-white">
            <div className="flex">
                <img alt="img-sect3" className="w-1/4" src={naruto} ></img>
                <img alt="img-sect3" className="w-1/4" src={bleach} ></img>
                <img alt="img-sect3" className="w-1/4" src={foodwar} ></img>
                <img alt="img-sect3" className="w-1/4" src={demonSlayer} ></img>
            </div>
            <div className="text-center ">
                <h3 className="text-2 font-extrabold text-2xl mt-10">Trouvez plus d'idées créatives pour vos projets</h3>
                <div className="flex justify-center text-3xl mt-5  italic">
                    <p className="w-5/12 text-gray-500 ">Interface utilisateur belle et facile à comprendre, animations professionnelles et glisser-déposer</p>
                </div>
            </div>
        </section>
    )
    
}

export default Section3