import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderCarousel() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="slider_imgContainer">
        <img className="slider_img" src={slider1} alt="im1" />
      </div>
      <div className="slider_imgContainer">
        <img className="slider_img" src={slider2} alt="im2" />
      </div>
      <div className="slider_imgContainer">
        <img className="slider_img" src={slider3} alt="im3" />
      </div>
    </Slider>
  );
}
