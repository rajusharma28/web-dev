 import { useEffect } from "react";
import { useParams } from "react-router";
 
 export default function Github(){
    // const {name}= useParams();
    // console.log(name);
    const {name} = useParams();
    const[Profile,setProfile]=useState(null);
    
    async function fetchuser() {
        const response = await fetch(`https://api.github.com/users${name}`);
        const data = await response.json();
        
    }

    useEffect(()=>{
        fetchuser();
    },[])
    
    return(
        <>
      
        <h1> Github page</h1>
        <div>
            <img src={Profile?.avatar_url}></img>
            <h2>{Profile.login}</h2>

        </div>
  </>
    )
    
}