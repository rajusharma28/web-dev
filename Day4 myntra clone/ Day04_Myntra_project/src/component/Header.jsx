import { decodeBase64 } from "bcryptjs"

function Header(){
    return(
        <div className="heading">
            <img className="images"  src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg"  width="100px" height="80px"  PaddingTop="10px" alt="" />
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but"> Home and Living </button>
                <button className="but">Beauty</button>

                <button className="but">Studio</button>
            </div>
            <input placeholder="Search for products brands and more" className="searchbar" />
            <div className="Profile">
                <button className="pro" >Profiles</button>
                <button className="pro" >Wishlist</button>
                <button className="pro" >Bag</button>
            </div>
        </div>
    )
}

export default Header;