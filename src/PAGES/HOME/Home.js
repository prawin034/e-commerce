import { Button } from 'bootstrap';
import ProductCart from '../../COMPONENTS/HOME/PRODUCT_CARD/product_cart';
import Footer from '../../COMPONENTS/SHARED/FOOTER/Footer';
import Header from '../../COMPONENTS/SHARED/HEADER/Header';

function Home() {
  return (
    <div>
      <Header />
      <div>
        <h3 className="display-6 text-center text-danger font-weight-bold mt-2">
          WELCOME TO HOME PAGE
        </h3>
        <ProductCart />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
// export { Home };
