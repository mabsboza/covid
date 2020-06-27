import { useState, useEffect } from 'react'
import Axios from 'axios'
import { monthString } from '../../helpers/helper'


const home = () => {
  const [total, setTotal] = useState('-');
  const [recovered, setRecovered] = useState('-');
  const [death, setDeath] = useState('-');
  const [updated, setUpdated] = useState('-');

  useEffect(() => {
    Axios.get('https://api.thevirustracker.com/free-api?global=stats')
    .then((response) => {
      animateValue("total", 0, response.data.results[0].total_cases, 1000);
      animateValue("recovered", 0, response.data.results[0].total_recovered, 1000);
      animateValue("death", 0, response.data.results[0].total_deaths, 1000);
      actualDateTime();
    })
  }, []);

  const animateValue = (id, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (id === "total") {
        setTotal(Math.floor(progress * (end - start) + start));
      } else if (id === "recovered") {
        setRecovered(Math.floor(progress * (end - start) + start));
      } else if (id === "death") {
        setDeath(Math.floor(progress * (end - start) + start));
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const actualDateTime = () => {
    const time = new Date();
    const month = monthString(time.getMonth());
    const date = time.getDate();
    const year = time.getFullYear();
    const hour = time.getHours();
    const min = time.getMinutes();
    const dayNight = hour >= 12 ? "PM" : "AM";
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const lastUpdated = `${month} ${date}, ${year}, ${
      hour.toString().length == 1 ? `0${hour}` : hour
    }:${
      min.toString().length == 1 ? `0${min}` : min
    } ${dayNight} ${timeZone}`;

    setUpdated(lastUpdated);
  }

  return (
    <div className="nk-banner">
      <div className="container">
        <div
          className={[
            "row g-gs align-items-center justify-content-between",
          ].join(" ")}
        >
          <div className={["col-lg-5"].join(" ")}>
            <div className="nk-banner-image">
              {" "}
              <img src="/gfx/protect.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 order-lg-last">
            <div className="nk-banner-block">
              <div className="content">
                <h1 className="heading">
                  {" "}
                  <span>Coronavirus</span>{" "}
                  <span className="heading-sm">
                    {" "}
                  </span>
                </h1>
                <p>
                  Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos. 
                  En los humanos, se sabe que varios coronavirus causan infecciones respiratorias que pueden ir desde el resfriado común hasta 
                  enfermedades más graves como el síndrome respiratorio de Oriente Medio (MERS) y el síndrome respiratorio agudo severo (SRAS).
                </p>
                <ul className="nk-banner-btns">
                  <li>
                    <a href="#protect" className={["btn scrollto"].join(" ")}>
                      <span>Medidas de protección</span>
                      <em className={["icon ni ni-shield-half"].join(" ")}></em>
                    </a>
                  </li>
                  <li>
                    <a href="https://tracker.mabsboza.vercel.app/" target="_blank" className="btn btn-transparent scrollto">
                      <span>Datos estadísticos</span>
                      <em className={["icon ni ni-arrow-right"].join(" ")}></em>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
