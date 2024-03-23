import { Outlet } from "react-router-dom";
import Nav from "../Nav/nav";
import Footer from "../Footer/footer";


export const Layout = () => {
    return(
        <div>
            <Nav />
          
            <Outlet/>
            <Footer/>
        </div>
    )
}
