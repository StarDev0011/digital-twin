import React from 'react'
import Slider from 'react-slick'
import HeroSection1 from './HeroSection/hero1'
import HeroSection2 from './HeroSection/hero2'

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider className="home_slider" {...settings}>
      <div>
        <HeroSection1 />
      </div>
      <div>
        <HeroSection2 />
      </div>
    </Slider>
  )
}
