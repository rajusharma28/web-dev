
function Card(props){
    return(
        <div className="card" style={{border:"2px solid black",padding:"2px"}}>
            <img src="https://statusquo.in/cdn/shop/products/SQ-RN-23131-BLACK_0001_2_a67e4a7c-de57-4a9a-a32f-e4b66da866e4.jpg?v=1741853744" height="300px"  length="300px" alt="Image " />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h3>price</h3>
            </div>
            
        </div>
    )
}


export default Card;