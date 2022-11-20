import { useState } from 'react';
import ProductCart from '../../COMPONENTS/HOME/PRODUCT_CARD/product_cart';
import Footer from '../../COMPONENTS/SHARED/FOOTER/Footer';
import Header from '../../COMPONENTS/SHARED/HEADER/Header';

function Home() {
  //CREATING STATE FOR PRODUCT DATA
  let my = 'data';
  const [products, setproducts] = useState([]);
  fetch('product.json')
    .then((Response) => Response.json())
    .then((data) => {
      setproducts(data);

      console.log(data);
    });

  return (
    <div>
      <Header />
      <div>
        <h3 className="display-6 text-center text-danger font-weight-bold mt-2">
          WELCOME TO HOME PAGE
        </h3>
        <div>
          <h4>{products && products[0].name}</h4>

          <ProductCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
// export { Home };
