
import Cartpage from "../../componentes/Cart/Cartpage";
import Footer from "../../componentes/Footer/Footer";
import Navigationbar from "../../componentes/ComponentsofNavbar/Navigationbar/Navigationbar"


const Viewcart=()=>{


    return(
        <div>
        <header><Navigationbar/></header>
            <div>
                <Cartpage/>
                <Footer />
            </div>

            
        </div>
    )
}
export default Viewcart;