
import {Link, Outlet} from "react-router";
 export default function Details(){
    return(

        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="/Hello">Home</Link>
            <Link to="/Hi">Hi</Link>
        </nav>

        <h1>Welcome to Details page</h1>
         <Outlet></Outlet>
          </>
    )
}