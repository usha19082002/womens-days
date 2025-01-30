import { useState } from "react"
import { useSelector } from "react-redux"

export default function CartBill({ item }) {



    const data = useSelector((state) => state.cart)
    console.log(data)


   
    
    return (
        <div className="card-body d-flex p-4 pb-1 pt-3">
            <p className="card-text w-75">
                {
                    data.map((bitem) => {
                        if (item.id == bitem.id) {
                             return item.name
                        }
                    }
                    )
                }
                {/* {item.name} */}
                {/* {productName} */}
            </p>
            <p className="card-text w-25 ms-5 mt-1">
            <b>
            ₹ {
                    data.map((bitem) => {
                        if (item.id == bitem.id) {
                            if(item.offer <= 0){
                              return  (bitem.quantity * item.price) ;
                            }else{
                              return Math.abs(bitem.quantity * (Math.floor((item.offer / 100) * item.price)-item.price));

                            }
                        }
                    }

                    )
                }
                </b>
                {/* {item.price} */}
                {/* {productPrice} */}

            </p>
            <p></p>
        </div>
    )
}