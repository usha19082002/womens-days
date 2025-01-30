//image importing section
import hariProd1 from '../Assets/img/products/hariProd1.png'
import hariProd2 from '../Assets/img/products/hariProd2.png'
import hariProd3 from '../Assets/img/products/hariProd3.png'
import hariProd4 from '../Assets/img/products/hariProd4.png'
import hariProd5 from '../Assets/img/products/dog.jpg'
import hariProd6 from '../Assets/img/products/lion.jpg'
import bestSell1 from '../Assets/img/products/bestSell1.png'
import bestSell2 from '../Assets/img/products/bestSell2.png'
import period1 from '../Assets/img/products/period1.png'
import period2 from '../Assets/img/products/period2.png'
import period3 from '../Assets/img/products/period3.png'
import period4 from '../Assets/img/products/period4.png'
import healthCare1 from '../Assets/img/products/healthCare1.png'
import healthCare2 from '../Assets/img/products/healthCare2.png'
import healthCare3 from '../Assets/img/products/healthCare3.png'




export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 2
    }
};

export const allProducts = [
    {
        id:1,
        name:'Half Running Set1',
        price:'419',
        img:hariProd1,
        off:20,
        previews:{
            0:hariProd1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:2,
        name:'Half Running Set2',
        price:'336',
        img:hariProd2,
        off:0,
        previews:{
            0:hariProd2,
            1:hariProd1,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:3,
        name:'Half Running Set3',
        price:'299',
        img:hariProd3,
        off:30,
        previews:{
            0:hariProd3,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:4,
        name:'Half Running Set4',
        price:'549',
        img:hariProd4,
        off:60,
        previews:{
            0:hariProd4,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:5,
        name:'Half Running Set5',
        price:'1200',
        img:hariProd5,
        off:80,
        previews:{
            0:hariProd5,        
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        },

    },
    {
        id:6,
        name:'Half Running Set6',
        price:'799',
        img:hariProd6,
        off:30,
        previews:{
            0:hariProd6,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:7,
        name:'Half Running Set',
        price:'419',
        img:bestSell1,
        off:30,
        category:'best_sellers',
        previews:{
            0:bestSell1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:8,
        name:'Half Running Set',
        price:'119',
        img:hariProd3,
        off:70,
        category:'best_sellers',
        previews:{
            0:hariProd3,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:9,
        name:'Half Running Set',
        price:'299',
        img:hariProd1,
        off:40,
        category:'best_sellers',
        previews:{
            0:hariProd1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:10,
        name:'Half Running Set',
        price:'549',
        img:bestSell2,
        off:60,
        category:'best_sellers',
        previews:{
            0:bestSell2,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:11,
        name:'Half Running Set',
        price:'1200',
        img:hariProd1,
        off:20,
        category:'best_sellers',
        previews:{
            0:hariProd1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:12,
        name:'Half Running Set',
        price:'799',
        img:hariProd4,
        off:30,
        category:'best_sellers',
        previews:{
            0:hariProd4,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:13,
        name:'Half Running Set',
        price:'419',
        img:period1,
        off:30,
        category:'period_care',
        previews:{
            0:period1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }

    },
    {
        id:14,
        name:'Half Running Set',
        price:'119',
        img:period2,
        off:50,
        category:'period_care',
        previews:{
            0:period2,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
        
    },
    {
        id:15,
        name:'Half Running Set',
        price:'299',
        img:period3,
        off:60,
        category:'Period_care',
        previews:{
            0:period3,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:16,
        name:'Half Running Set',
        price:'549',
        img:period4,
        off:90,
        category:'period_care',
        previews:{
            0:period4,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:17,
        name:'Half Running Set',
        price:'1200',
        img:period1,
        off:40,
        category:'period_care',
        previews:{
            0:period1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:18,
        name:'Half Running Set',
        price:'799',
        img:period2,
        off:50,
        category:'period_care',
        previews:{
            0:period2,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:19,
        name:'Half Running Set',
        price:'419',
        img:healthCare1,
        off:50,
        category:'health_care',
        previews:{
            0:healthCare1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:20,
        name:'Half Running Set',
        price:'119',
        img:healthCare2,
        off:15,
        category:'health_care',
        previews:{
            0:healthCare2,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:21,
        name:'Half Running Set',
        price:'299',
        img:healthCare3,
        off:70,
        category:'health_care',
        previews:{
            0:healthCare3,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:22,
        name:'Half Running Set',
        price:'549',
        img:bestSell1,
        off:30,
        category:'health_care',
        previews:{
            0:bestSell1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:23,
        name:'Half Running Set',
        price:'1200',
        img:healthCare1,
        off:50,
        category:'health_care',
        previews:{
            0:healthCare1,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
    {
        id:24,
        name:'Half Running Set',
        price:'799',
        img:healthCare3,
        off:30,
        category:'health_care',
        previews:{
            0:healthCare3,
            1:hariProd2,
            2:hariProd3,
            3:hariProd4,
            4:hariProd1
        }
    },
]

