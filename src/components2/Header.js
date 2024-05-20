
const Header = ({cartItems, count, increaseCount, decreaseCount}) => {


  return (
    <div>
        <h1>Number of Products in carts: {cartItems}</h1>
        
        <h2>Count from Header: {count} </h2>
        <button onClick={()=>{decreaseCount()}}>Reduce</button>
        <button onClick={()=>{increaseCount()}}>Add</button>
    </div>
  )
}

export default Header