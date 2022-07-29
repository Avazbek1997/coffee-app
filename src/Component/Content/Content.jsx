import React from "react";
import "./Content.scss";
import Cofe from "./cofe/Cofe";
import img1 from "./cofe/images/pp.png";
import img2 from "./cofe/images/pp1.png";
import Card from "./card/Card";
import Health from './healthy/Health'
import rasm1 from "./card/images/IMAGE (3).png";
import rasm2 from "./card/images/IMAGE (4).png";
import rasm3 from "./card/images/IMAGE (5).png";
import rasm4 from "./card/images/IMAGE (6).png";
import rasm5 from "./card/images/IMAGE (7).png";
import rasm6 from "./card/images/IMAGE (8).png";
import rasm7 from "./card/images/IMAGE (9).png";
import rasm8 from "./card/images/IMAGE (10).png";
import rasm9 from "./card/images/IMAGE (11).png";
import rasm10 from "./image/IMAGE (14).png";
import rasm11 from "./image/IMAGE (15).png";
import rasm12 from "./image/IMAGE (16).png";
import rasm13 from "./image/IMAGE (12).png";
import rasm14 from "./image/IMAGE (17).png";
import rasm15 from "./image/IMAGE (18).png";
import rasm16 from "./image/IMAGE (19).png";
import Reastangle from "../Restangle/Reastangle";
import Footer from "../Footer/Footer";

const Content = () => {
  return (
    <div className="toliq">
      <div className="blok">
        <div className="price">
          <Cofe jpg={img2} nom="Pink Premium Ceramic" narx="$ 99.00 USD" />
          <Cofe jpg={img1} nom="Golden Designers Mug" narx="$50.00 USD " />
        </div>
        <button>More Products</button>
        <div className="cards">
          <Card img={rasm1} name="Red Love Cup" price="$25.00" />
          <Card img={rasm2} name="Black Tea Cup" price="$15.00" />
          <Card img={rasm3} name="B&W Essentials Mug" price="$19.00" />
          <Card img={rasm4} name="Winter Style Mug" price="$25.00" />
          <Card img={rasm5} name="Ceramic Tea" price="$46.00" />
          <Card img={rasm6} name="No Handle Bar Cup" price="$34.00" />
          <Card img={rasm7} name="Espresso Cup by Mugs.co" price="$25.00" />
          <Card img={rasm8} name="Pink Premium Ceramic" price="$99.00" />
          <Card img={rasm9} name="Summer Designer Cup" price="$29.00" />
        </div>
        <h3>Buy 2 mugs and get a coffee magazine free</h3>
        <div className="sxema">
          <div className="sxema-left">
            <img id="blk" src={rasm10} />
            <ul>
              <li>
                <img src={rasm11} alt="" />
              </li>
              <li>
                <img src={rasm12} alt="" />
              </li>
            </ul>
          </div>
          <div className="sxema-right">
            <h5>Premium Offer</h5>
            <h1>Get our Coffee Magazine</h1>
            <p>
              The most versatile furniture system ever created. Designed to fit
              your life.
            </p>
            <button>Start Shopping</button>
          </div>
        </div>
      </div>
      <img id="uzun" src={rasm13} alt="" />
      {/* uzun rasm tugadi */}


       {/* blok card boshlandi */}
       <div className="blok">
        <h6 id="h6">Behind the mugs, lifestyle stories</h6>
        <div className="heart">
            <Health  img={rasm14} title='Health Check: why do I get a headache when I haven’t had my coffee?' feel='It is a paradisematic country, in which roasted parts of sentences fly into your mouth.' date='October 9, 2018'/>
            <Health  img={rasm15} title='How long does a cup of coffee keep you awake?' feel='It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.' date='October 9, 2018'/>
            <Health  img={rasm16} title='Recent research suggests that heavy coffee drinkers may reap health benefits.' feel='It is a paradisematic country, in which roasted parts of sentences fly into your mouth.' date='October 9, 2018'/>
        </div>
       </div>
      {/* blok card tugadi */}

      {/* uzun restangle boshlandi */}

      <Reastangle/>
      <div className="blok">
            <Footer/>
      </div>


    </div>
  );
};

export default Content;
