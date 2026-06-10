import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import tshirtMockup from "../assets/t-shirt-mockup.jpg";
import hoodieMockup from "../assets/white-hoodie-mockup.jpg";
import skirtMockup from "../assets/skirt-mockup.jpg";

const bannerSlides = [
  {
    image: tshirtMockup,
    title: "Fresh Graphic Tees",
    description: "Bring everyday outfits to life with soft cotton staples.",
  },
  {
    image: hoodieMockup,
    title: "Cozy Hoodie Drop",
    description: "Layer up with clean, comfortable pieces for cooler days.",
  },
  {
    image: skirtMockup,
    title: "New Season Skirts",
    description: "Light silhouettes and easy styling for a polished look.",
  },
];

function Banner() {
  return (
    <Carousel controls indicators interval={3500} pause="hover">
      {bannerSlides.map((slide) => (
        <Carousel.Item key={slide.title}>
          <img
            className="banner-image d-block w-100 object-fit-cover"
            src={slide.image}
            alt={slide.title}
          />
          <Carousel.Caption className="bg-dark bg-opacity-75 rounded-2 p-3">
            <h2 className="h4 fw-bold">{slide.title}</h2>
            <p className="mb-0">{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
