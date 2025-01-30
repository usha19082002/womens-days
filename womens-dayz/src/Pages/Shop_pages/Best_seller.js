import { useSelector } from "react-redux";
import Banner from "../../Components/Banner";
import Products from "../../Components/Product";
import { allProducts, bestSellers } from "../../Data/Products_datas";

//images importing section
import load from '../../Assets/load.png'
import shop1 from '../../Assets/img/shop1.png'
import shop2 from '../../Assets/img/shop2.png'
import shop3 from '../../Assets/img/shop3.png'
import shop4 from '../../Assets/img/shop4.png'

export default function Best_seller(params) {
    const wisht = useSelector((state) => state.Whistlist);

    const BestSellers = allProducts.map((item) => {
        const itemInWisht = wisht.find((o) => o.id === item.id);
        return item.category === 'best_sellers' ? (
            <div className="col-md-3 col-6 product-mobile" key={item.id}>
                <Products
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    unqid={item.id}
                    off={item.off}
                    wstatus={itemInWisht ? true : false}
                />
            </div>
        ) : null;
    });


    return (
        <>
            <Banner type="shop_page" />
            <div className="container">
                <div className="row mt-5 p-3 product-mobile">
                    {BestSellers}
                </div>
            </div>
            <div className="text-center mt-5 p-2">
                <button className="p-2 buttons"> <img src={load} /> Load More </button>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <img src={shop1} width={'18%'} className="" />
                                <div className="p-2 mt-2">
                                    <h5 className="">24X7 FULLY SUPPORT</h5>
                                    <p>Get friendly support</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <img src={shop2} width={'18%'} className="" />
                                <div className="p-2 mt-2">
                                    <h5 className="">24X7 FULLY SUPPORT</h5>
                                    <p>Get friendly support</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <img src={shop3} width={'18%'} className="" />
                                <div className="p-2 mt-2">
                                    <h5 className="">24X7 FULLY SUPPORT</h5>
                                    <p>Get friendly support</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card border-0">
                            <div className="d-flex" style={{ alignItems: "center" }}>
                                <img src={shop4} width={'18%'} className="" />
                                <div className="p-2 mt-2">
                                    <h5 className="">24X7 FULLY SUPPORT</h5>
                                    <p>Get friendly support</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>



        </>
    )
}