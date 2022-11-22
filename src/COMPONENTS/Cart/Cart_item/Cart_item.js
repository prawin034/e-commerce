import './Cart.css';

function CartItem(props) {
  return (
    <div className="container grid">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 w-25">
            <img
              src={props.item.img}
              className="img-fluid img rounded-start"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8 bg-danger text-white w-75 ">
            <div className="card-body">
              <h5 className="card-title">{props.item.name}</h5>
              <p className="card-text text-uppercase ">{props.item.detail}</p>
              <p className="card-text text-uppercase ">{props.item.price}</p>

              <div class="dropdown">
                <select className="drop form-control mb-4 ">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <button type="button" class="btn    btn-outline-success">
                Success
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
