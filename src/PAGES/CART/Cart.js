import Header from '../../COMPONENTS/SHARED/HEADER/Header';
import CartItem from '../../COMPONENTS/Cart/Cart_item/Cart_item';
import { useEffect, useState } from 'react';

function Cart() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch('Cart.json')
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);

        console.log(carts);
      });
  }, []);

  return (
    <div>
      <div>
        <Header />
      </div>
      <h1>{}</h1>
      <div>
        <h1 className="text-center mt-4 text-success">CART COMPONENTS</h1>

        <div>
          {carts.map((cart) => {
            return <CartItem item={cart} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Cart;
