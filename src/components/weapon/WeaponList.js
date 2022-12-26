import React from "react";
// import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// import "../../../node_modules/react-multi-carousel/lib/styles.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../layout/list.css";

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "white" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "white" }} />
    </div>
  );
}

const WeaponList = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // initialSlide: 0,
    variableWidth: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 5,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 2,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  const selectedWeapon = (a) => {
    props.onSaveSelectedWeapon(a);
  };

  return (
    // <Carousel
    //   draggable
    //   infinite
    //   responsive={responsive}
    //   removeArrowOnDeviceType={["tablet", "mobile"]}
    //   className="mt-3 lg:-mt-4 mx-5 lg:mx-[200px]"
    // >
    //   {props.weapons.map((weapon) => {
    //     return (
    //       <div
    //         key={weapon.uuid}
    //         className="border-solid border-2 mx-3 h-[50px] w-[50px] lg:h-[100px] lg:w-fit hover:bg-red-500"
    //         onClick={() => selectedWeapon(weapon.displayName)}
    //       >
    //         <img src={weapon.displayIcon} alt={weapon.displayName}></img>
    //       </div>
    //     );
    //   })}
    // </Carousel>
    // <div className="mt-3 lg:-mt-5">
    <div className="mt-3 px-3">
      <Slider {...settings}>
        {props.weapons.map((weapon) => {
          return (
            <div
              key={weapon.uuid}
              className="px-2"
              onClick={() => selectedWeapon(weapon.displayName)}
            >
              <img
                src={weapon.displayIcon}
                alt={weapon.displayName}
                className=" border-solid border-2 h-[60px] w-[60px] md:h-[100px] md:w-[100px] object-cover hover:bg-red-500"
              ></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WeaponList;
