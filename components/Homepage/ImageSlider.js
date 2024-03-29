import React from 'react'
import Slider from 'react-slick'

export default function ImageSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider className="limitless_slider" {...settings}>
      <div>
        <img src="/images/limitless.png" />
      </div>
      <div>
        <img src="/images/limitless.gif" />
      </div>
    </Slider>
  )
}
