import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Modal.css";
import { useState } from "react";
// import { useRef } from "react";
import Select from 'react-select';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Modal({ setOpenModal }) {
  // const sliderRef = useRef(null);
  const options = [
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
    { value: 'option3', label: 'Option3' }
  ];
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const [counter, setCounter] = useState(0);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>&times;</button>
        </div>
        <div  className="slider-content" style={{display: "flex", alignItems: "center"}}>
            <div className="slider-container">
                {/* <Slider {...settings} style={{ width: "140px",marginRight : "80px", marginLeft: "30px"}}>
                    <div>
                        <img
                        src="http://cdn.onlinewebfonts.com/svg/img_40099.png"
                        alt="product"
                        width="140"
                        />
                    </div>
                    <div>
                        <img
                        src="http://cdn.onlinewebfonts.com/svg/img_40099.png"
                        alt="product"
                        width="140"
                        />
                    </div>
                    <div>
                        <img
                        src="http://cdn.onlinewebfonts.com/svg/img_40099.png"
                        alt="product"
                        width="140"
                        />
                    </div>
                </Slider> */}
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  showThumbs={false}
                  width="170px"
                >
                  <div>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="product" />
                  </div>
                  <div>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="product" />
                  </div>
                  <div>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_40099.png" alt="product" />
                  </div>
                </Carousel>
            </div>
            <div>
                <h1>Product Name</h1>
                <p>Item Description</p>
                <p>Item Description</p>
                <label htmlFor="count" style={{marginRight: "10px"}}>Select Quantity : </label>
                <button onClick={() => { if(counter > 0) setCounter(counter - 1)}}>-</button>
                <input type = "number"  id="count" value={counter} style = {{width: "30px", margin: "0px 5px 0px 5px"}}/>
                <button onClick={() => {setCounter(counter + 1)}}>+</button>
            </div>
        </div>
        <div className="about-product" style={{marginTop: "50px"}}>
            <Select options={options} />
            <h2>About Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
