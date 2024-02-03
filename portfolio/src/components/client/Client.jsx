import './client.scss'
import React from 'react'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import Carousel from 'react-elastic-carousel';

const data = [
    {
        name: 'Shristi Koju',
        img: '/shristi.png',
        review: 'Loved, loved, loved the attention to detail! Highly Recommended!'
    },
    {
        name: 'Mariyam Shrestha',
        img: '/mariyam.jpg',
        review: 'Say what! 1!'
    },
    {
        name: 'Abhinas Regmi',
        img: '/abhinas.png',
        review: 'A design marvel!'
    },
    {
        name: 'Safal Adhikari',
        img: '/safal.jpg',
        review: 'Cutting-edge and modern web design magician'
    },

    {
        name: 'Shristi Koju',
        img: '/shristi.png',
        review: 'Loved, loved, loved the attention to detail! Highly Recommended!'
    },
    {
        name: 'Mariyam Shrestha',
        img: '/mariyam.jpg',
        review: 'Say what! 1!'
    },
    {
        name: 'Abhinas Regmi',
        img: '/abhinas.png',
        review: 'A design marvel!'
    },
    {
        name: 'Safal Adhikari',
        img: '/safal.jpg',
        review: 'Cutting-edge and modern web design magician'
    },

    {
        name: 'Shristi Koju',
        img: '/shristi.png',
        review: 'Loved, loved, loved the attention to detail! Highly Recommended!'
    },
    {
        name: 'Mariyam Shrestha',
        img: '/mariyam.jpg',
        review: 'Say what! 1!'
    },
    {
        name: 'Abhinas Regmi',
        img: '/abhinas.png',
        review: 'A design marvel!'
    },
    {
        name: 'Safal Adhikari',
        img: '/safal.jpg',
        review: 'Cutting-edge and modern web design magician'
    }
]

const Client = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    
  return (
    <div className='Client' id='Clients'>
      <h1>Our Happy Clients!</h1>

      <div className="carousel">
        <Carousel
            // easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}
            // enableAutoPlay autoPlaySpeed={10000}
            enableMouseSwipe={true}
            enableSwipe={true}
            // enableTilt={true}
            disableArrowsOnEnd={false}
        >
            {data.map((d) => (
                <div className='main'>
                    <div className='imageDiv'>
                        <img src={d.img} alt="" />
                    </div>

                    <div className='contentDiv'>
                        <h2>{d.name}</h2>
                        <p>{d.review}</p>
                    </div>
                </div>
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Client
