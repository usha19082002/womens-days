import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_remove, update_qty } from "../Redux/actions/CartAction";

export default function CartItem({ item, index }) {

  const dispatch = useDispatch();

  const [qty, setQty] = useState(item.quantity);


  // if (qty <= 0) {
  //   return setQty(1)
  // }
  const QtyChange = (e, id, qty) => {
    var newValue = e.target.value;
    if (newValue <=0 ){
      return newValue =1
    }
    console.log('change trigger')
    dispatch(update_qty(id, newValue));
    setQty(newValue);
  };

  // const data = useSelector((state) => state.cart)

  return (
    <div className="card border-0">
      <p className="card-img-overlay text-danger rounded-circle" style={{ marginLeft: '90%', marginTop: '-10px', cursor: 'pointer' }}><span className="" onClick={() => dispatch(cart_remove(index))}><b className="">x</b></span></p>
      <div className="row p-2">
        <div className="col-md-4">
          <img src={item.img} width={155} height={200} className="img-fluid" alt={item.name} />
        </div>
        <div className="col-md-8 mt-4">
          <div className="text-container">
            <h4>{item.name}</h4>
            <p>Size: <span>
              <select className="form-control w-25 d-inline">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>

            </span></p>
            <h5><b>₹<span className="text-danger">{item.offer <= 0 ? item.price : item.price - (Math.floor((item.offer / 100) * item.price))}</span></b></h5>
            <input
              type="number"
              value={qty}
              className="form-control w-25"
              min="1"
              onChange={(e) => QtyChange(e, item.id, qty)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' || e.key === 'Delete') {
                  // alert('hi')
                }}
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}