import Cart from "./Cart"
import Products from "./Products"

const Content = ({cartItems, increase_cart, addNewProduct}) => {
  return (
    <div>

        <Products addNewProduct={addNewProduct}/>
        <Cart cartItems={cartItems} increase_cart={increase_cart}/>

    </div>
  )
}

export default Content