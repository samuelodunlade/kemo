
const Cart = ({cartItems, increase_cart}) => {

    //cartItems = 2 prop should never be changed by the child

  return (
    <div>

         <h1>Number of Products in carts From Cart Component: {cartItems}</h1>
          <button onClick={()=>{increase_cart()}}>Increase Cart Items</button>
    </div>
  )
}

export default Cart