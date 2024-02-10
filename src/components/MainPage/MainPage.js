import React, { useState } from 'react'
import './MainPage.css';
import { FaUser } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


import membership from '../../assets/membership.png';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const MainPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <IoIosArrowRoundBack className='prev-arrow' />,
        nextArrow: <IoIosArrowRoundForward className='next-arrow' />
    };

    return (
        <>
            {/* <!-- Navbar --> */}

            <header >


                <nav class="navbar">
                    <div className='list'>
                        <a href="#" >Home</a>
                        <a href="aboutus.html" >Dash board</a>

                        <a href="portfolio.html" >Products</a>
                        <a href="contactUs.html" >Transactions</a>
                        <a href="contactUs.html" >Journal</a>
                    </div>
                    <div className="user-container">
                        <FaUser />

                        <h4>Joseph lazar</h4>
                    </div>
                </nav>
            </header>

            {/* New Arrival Boady Part */}
            <section className='newArrival'>
                <div className='left-side'>
                    <div className='titles'>
                        <h3>New Arrival</h3>
                        <h6>JOIN TODAY</h6>

                    </div>
                    <div className='img-btn'>
                        <img src={membership} alt='' style={{ width: '60%' }} />
                        <button className='btn1'>JOIN NOW</button>
                    </div>
                </div>


                <div className='right-side'>
                    <div className='heading'>
                        <h3>Unlock Preminum Features Now</h3>
                    </div>

                    <div className='carousel-cards'>
                    <IoIosArrowRoundBack className='prev-arrow' />
                        {/* <Slider {...settings}> */}
                            <div class="approach-card">
                                <img src={img2} className='card-image' />
                                <div className='card-text'>
                                    <p>Lower Interest Rates</p>
                                </div>
                            </div>

                            <div class="approach-card">
                                <img src={img3} className='card-image' />
                                <div className='card-text'>
                                    <p>Interest Free Payments</p>
                                </div>
                            </div>

                            <div class="approach-card">
                                <img src={img1} className='card-image' />
                                <div className='card-text'>
                                    <p>Discount on Materials</p>
                                </div>
                            </div>

                            {/* next section */}



                            <IoIosArrowRoundForward className='next-arrow' />

                        {/* </Slider> */}
                        
                    </div>


                    <div className='btns'>
                    <HiOutlineDotsHorizontal className='dots' />

                        <button className='btn2 btnss'>UNLOCK NOW</button>
                        <button className='btn3 btnss'>DETAILS</button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default MainPage