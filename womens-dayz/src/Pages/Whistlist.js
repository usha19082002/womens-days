import '../Styles/Carousal.css'
import Products from "../Components/Product";
import WhistlistNav from "../Components/WhistlistNav";
import { allProducts } from "../Data/Products_datas";
import { useDispatch, useSelector } from 'react-redux';
import { removeWhistlist } from '../Redux/actions/WhistlistAction';
import close_icon from '../Assets/close_icon.png'


export default function Whistlist(params) {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.Whistlist);
    console.log(data)

    const removeFromWhistlist = (e, id) => {
        e.stopPropagation();
        dispatch(removeWhistlist(id, false));
    }



    const allProds = allProducts.map((item) => (
        <Products
            name={item.name}
            price={item.price}
            img={item.img}
            unqid={item.id}
        />
    ))
    return (
        <>
            <div className="p-5">
                <div className="row">
                    <div className="col col-md-4">
                        <WhistlistNav />
                    </div>
                    <div className="col">
                        <div className="row">
                            {
                                data.map((item) => (
                                    <div className="col col-md-4 pb-4">
                                        <div className="card border product-card" style={{ width: '250px' }}>
                                            <img src={item.img} className="" style={{ width: '250px', height: '369px' }} />
                                            <img
                                                src={close_icon}
                                                className="card-img-overlay rounded-circle p-2 bg-white"
                                                style={{ marginLeft: '82%', marginTop: '20px', zIndex: 1, cursor: 'pointer' }}
                                                onClick={(e) => {
                                                    removeFromWhistlist(e, item.id)
                                                }}
                                            />
                                            <h5 className="text-center mt-3">{item.name}</h5>
                                            {
                                                item.offer > 0 ?
                                                    (
                                                        <h4 className="text-center ms-4"><span style={{ textDecoration: 'line-through', fontSize: '20px' }}>₹{item.price}
                                                        </span> <span>₹{item.price - Math.floor((item.offer / 100) * item.price)}</span></h4>
                                                    ) :
                                                    (
                                                        <h4 className="text-center ms-4">₹{item.price}</h4>
                                                    )
                                            }
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}