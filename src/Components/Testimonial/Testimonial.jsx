import React from "react";
import Slider from "react-slick";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import Profile3 from "../../assets/profile3.jpg";
import Profile4 from "../../assets/profile4.jpg";
import Profile5 from "../../assets/profile5.jpg";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const Testimonial = () => {
  const SliderComponent = Slider.default || Slider;

  const renderTestimonialData = testimonialsData.map((review) => {
    return (
      <div className="card" key={review.id}>
        <div className="flex gap-2">
          <div className="profile">
            <img src={review.image} />
          </div>
          <div>
            <h4>{review.name}</h4>
            <p>{review.title}</p>
            <span>
              {Array.from({ length: review.rating }, (_, i) => (
                <FaStar key={i} className="rating-star" />
              ))}
            </span>
          </div>
        </div>
        <div>
          <p className="para">{review.text}</p>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="text-center">
          <span
            className="sub-text overlay-text middle"
            datatype="Client testimonials"
          >
            Client testimonials
          </span>
          <h2>
            Testimonials That <br />
            <span className="green-text">Speaks To My Results</span>
          </h2>
        </div>
        {SliderComponent ? (
          <SliderComponent {...sliderSettings} className="mt-5">
            {renderTestimonialData}
          </SliderComponent>
        ) : (
          <div>Slider failed to load.</div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;

const testimonialsData = [
  {
    name: "Leslie Alexander",
    title: "CEO, Software Company",
    image: Profile1,
    rating: 5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  },
  {
    name: "Dianne Russell",
    title: "CEO, Plant Shop App",
    image: Profile2,
    rating: 5,
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    name: "Alex Johnson",
    title: "CTO, Tech Innovations",
    image: Profile3,
    rating: 4,
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
  {
    name: "Emily Carter",
    title: "Founder, EcoMarket",
    image: Profile4,
    rating: 3,
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    name: "Michael Smith",
    title: "Head of Design, Creative Co.",
    image: Profile5,
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];

var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
