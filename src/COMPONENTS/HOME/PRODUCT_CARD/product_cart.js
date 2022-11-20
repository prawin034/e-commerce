import './product_cart.css';

function ProductCart() {
  return (
    <div className="card bg-dark">
      <img
        src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
        className="img "
        alt="..."
      ></img>

      <div className="card-body">
        <h5 className="card-title ">IPHONE</h5>
        <p className="card-text text-uppercase ">created by apple</p>
        <p className="card-text text-uppercase ">95000</p>
        <a href="#" className=" btn text-uppercase btn-success btn-lg btn-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            class="bi bi-file-lock-fill text-dark"
            viewBox="0 0 16 16"
          >
            <path d="M7 6a1 1 0 0 1 2 0v1H7V6zM6 8.3c0-.042.02-.107.105-.175A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3z" />
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z" />
          </svg>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ProductCart;
