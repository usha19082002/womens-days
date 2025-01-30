import { useEffect, useState } from "react";

export default function Offer_duration(params) {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


  let today = new Date(),
    dd = String(today.getDate()).padStart(2, '0'),
    mm = String(today.getMonth() + 1).padStart(2, '0'),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = '11/12/',
    birthday = dayMonth + yyyy;

  today = mm + '/' + dd + '/' + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime();
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;

      setTime({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="w-50 offer mx-auto text-center mt-5 mb-4">
            <h2 className="mb-4">{time.days <= 0 ? "Happy Diwali!" : 'Diwali Offer'}</h2>
            <div className="row">
                <div className="col-3">
                   <div className="rounded-2 p-1 offer" style={{color:'#E57C7C',backgroundColor:'#DFD8D7'}}>
                   <h1 className='mt-3'><b>-{time.days}</b></h1>
                    <p className="text-dark">Days</p>
                   </div>
                </div>
                <div className="col-3">
                   <div className="rounded-2 p-1 offer" style={{color:'#E57C7C',backgroundColor:'#DFD8D7'}}>
                   <h1 className='mt-3'><b>-{time.hours}</b></h1>
                    <p className="text-dark">Days</p>
                   </div>
                </div>
                <div className="col-3">
                   <div className="rounded-2 p-1 offer" style={{color:'#E57C7C',backgroundColor:'#DFD8D7'}}>
                   <h1 className='mt-3'><b>-{time.minutes}</b></h1>
                    <p className="text-dark">Days</p>
                   </div>
                </div> 
                <div className="col-3 ">
                   <div style={{color:'#E57C7C',backgroundColor:'#DFD8D7'}} className="rounded-2 p-1 offer">
                   <h1 className='mt-3'><b>-{time.seconds}</b></h1>
                    <p className="text-dark">Days</p>
                   </div>
                </div>
            </div>
        </div>
  );

}