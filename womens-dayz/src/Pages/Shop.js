import Banner from "../Components/Banner";
import Products from "../Components/Product";
import { allProducts, bestSellers, healthCare, periodCare } from "../Data/Products_datas";

export default function Shop(params) {

    const allProds = allProducts.map((item)=>(
        <div className="col-sm-3">
        <Products
            name ={item.name}
            price = {item.price}
            img = {item.img}
        />
        </div>
    ))

        const BestSellers = allProducts.map((item)=>{
            if (item.category == 'best_sellers') {
                return <Products
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    unqid={item.id}
                    off={item.off}
                />
            }
        })

        const PeriodCare = allProducts.map((item)=>{
            if (item.category == 'period_care') {
                return <Products
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    unqid={item.id}
                    off={item.off}
                />
            }
})

        const HealthCare = allProducts.map((item)=>{
            if (item.category == 'health_care') {
                return <Products
                    name={item.name}
                    price={item.price}
                    img={item.img}
                    unqid={item.id}
                    off={item.off}
                />
            }
})

    return (
        <>
            <Banner type="shop_page" />

            <div className="container">
                <div className="row mt-5 p-3">
                        {allProds}
                </div>
            </div>

            
              
        </>
    )
}