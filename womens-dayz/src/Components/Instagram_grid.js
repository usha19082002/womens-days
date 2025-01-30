import insta1 from '../Assets/img/insta1.png'
import insta2 from '../Assets/img/insta2.png'
import insta3 from '../Assets/img/insta3.png'
import insta4 from '../Assets/img/insta4.png'
import insta5 from '../Assets/img/insta5.png'
import insta6 from '../Assets/img/insta6.png'
import insta7 from '../Assets/img/insta7.png'

export default function InstagramGrid(params) {
    return (
        <div className="container">
            <div className="row g-0">
                <div className="col-3">
                    <img src={insta1} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta2} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta3} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta4} alt="insatagram_img" className="img-fluid" />
                </div>
            </div>
            <div className="row g-0">
                <div className="col-3">
                    <img src={insta5} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta6} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta7} alt="insatagram_img" className="img-fluid" />
                </div>
                <div className="col-3">
                    <img src={insta1} alt="insatagram_img" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}
