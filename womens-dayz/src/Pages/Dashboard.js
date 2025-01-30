import { useSelector } from "react-redux";
import WhistlistNav from "../Components/WhistlistNav";
import { useEffect, useState } from "react";

export default function Dashboard(params) {

    const data = useSelector((state) => state.Orders);
    console.log(data);



    const datacart = useSelector((state) => state.cart);
    const dataSingle = useSelector((state) => (state.Single))
    console.log(dataSingle)



    const [price, setPrice] = useState()





    useEffect(() => {
        const totalPrice = datacart.reduce((acc, product) => {
            const productPrice = Math.abs((Math.floor((product.offer / 100) * product.price - product.price) * product.quantity));

            if (productPrice === 0) {
                const s = parseFloat(product.price) * product.quantity;
                return acc + s;
            } else {
                return acc + productPrice;
            }
        }, 0);



        // setPrice(totalPrice);
    }, [data]);

    return (
        <>
            <div className="p-5">
                <div className="row">
                    <div className="col col-md-4 m-2">
                        <WhistlistNav />
                    </div>
                    <div className="col m-2">
                        {
                            data.map((item) => (
                                <div className="card p-3">
                                    <div className="p-4" style={{ backgroundColor: '#ddf0f0' }}>

                                        <p className="text-end " >Ordered Date & Time :</p>
                                        <h5 className="text-end" >22 April 2022 10:12 AM</h5>
                                        <p style={{ marginTop: '-9%' }}>Order Number</p>
                                        <h5 style={{ marginTop: '%' }}>{item.id}<span className="btn btn-outline-warning ms-3" style={{ marginTop: '-25px' }}>In progress</span></h5>


                                    </div>
                                    {
                                        item.data.map((item) => (
                                            <>
                                                <div className="text-container row p-2">
                                                    <div className="col-md-3 col-12">
                                                        <img src={item.img} width={122} height={156} alt="Product Image" />
                                                    </div>
                                                    <div className="col-md p-4 col-12">
                                                        <h5>{item.name}</h5>
                                                        <p>Size: XXL</p>
                                                        <h5>
                                                            ₹
                                                            <span className="text-danger">
                                                                {Math.abs(
                                                                    (Math.floor((item.offer / 100) * item.price) - item.price) * item.quantity
                                                                )}
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <hr />

                                            </>
                                        ))
                                    }

                                    <div className="d-flex justify-content-between p-2">
                                        {/* <h5 className="text-success">
                                            Coupon code: <span className="fs-4">TUY{item.discount}Y</span> Applied. {item.discount} Discount!!!!
                                        </h5> */}
                                        {
                                            item.discount == undefined || item.discount == 0 ? (
                                                <>
                                                <h5 className="text-danger">
                                           Coupon Code Not Applied. 0 Discount!!!!
                                        </h5>
                                                </>
                                            ) : (
                                              <>
                                              <h5 className="text-success">
                                            Coupon code: <span className="fs-4">TUY{item.discount}Y</span> Applied. {item.discount} Discount!!!!
                                        </h5>
                                              </>
                                            )
                                        }
                                        <h4>
                                            Total: {isNaN(item.total)
                                                ? item.data.map((item) => (
                                                    Math.abs((Math.floor((item.offer / 100) * item.price) - item.price) * item.quantity)
                                                ))
                                                : item.total
                                            }
                                        </h4>

                                    </div>

                                </div>

                            ))
                        }

                    </div>
                </div>

            </div>
        </>
    )
}