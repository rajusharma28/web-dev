 import Card from "./Card";
 import { addItem,removeItem } from "./Slicer1";
 import { useDispatch } from "react-redux";
 
 export default function foodCart(value){

    const [isCart,setisCart] = useState(false);
    const dispatch = useDispatch();

    function handleClick()
    {
        if(inCart){
            dispatch(removeItem())
            setInCart(false);
        }
        else{
            dispatch(addItem())
            setisCart(true);
        }
    }
    <>
     <h1>{value.food}</h1>
            <h2>₹{value.price}</h2>
            <button onClick={handleClick}>{inCart?"Remove":"Add"} </button>
    </>
}