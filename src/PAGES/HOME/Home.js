import { useEffect, useState } from 'react';
import ProductCart from '../../COMPONENTS/HOME/PRODUCT_CARD/product_cart';
// import Cart from '../../COMPONENTS/ORDER/CART/Card';
import Footer from '../../COMPONENTS/SHARED/FOOTER/Footer';
import Header from '../../COMPONENTS/SHARED/HEADER/Header';

function Home() {
  //CREATING STATE FOR PRODUCT DATA
  let my = 'data';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('product.json')
      .then((Response) => Response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  return (
    <div>
      <Header />

      <h3 className="display-6 text-center text-danger font-weight-bold mt-2">
        WELCOME TO HOME PAGE
      </h3>

      <div className="row">
        {products.map((product) => {
          <div className="col-3">
            return <ProductCart item={product} />;
          </div>;
        })}
        ;
      </div>

      <Footer />
    </div>
  );
}
export default Home;
