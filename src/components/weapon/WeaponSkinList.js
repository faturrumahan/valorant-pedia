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

const WeaponSkinList = (props) => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          slidesToShow: 7,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const selectedSkin = (a) => {
    props.onSaveSelectedSkin(a);
  };

  return (
    // <div>
    //   {props.weaponSkins.map((skin) => {
    //     return <div key={skin.uuid}>{skin.displayName}</div>;
    //   })}
    // </div>
    // <Carousel
    //   draggable
    //   infinite
    //   responsive={responsive}
    //   removeArrowOnDeviceType={["tablet", "mobile"]}
    //   className="mt-3 lg:-mt-4 mx-5 lg:mx-[200px]"
    // >
    //   {props.weaponSkins.map((skin) => {
    //     return (
    //       <div
    //         key={skin.uuid}
    //         className="border-solid border-2 mx-3 h-[50px] w-[50px] lg:h-[100px] lg:w-fit hover:bg-red-500 mb-5"
    //         onClick={() => selectedSkin(skin)}
    //       >
    //         <img
    //           src={
    //             !skin.displayIcon
    //               ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
    //               : skin.displayIcon
    //           }
    //           alt={skin.displayName}
    //         ></img>
    //       </div>
    //     );
    //   })}
    // </Carousel>
    <div className="px-3">
      <Slider {...settings}>
        {props.weaponSkins.map((skin) => {
          return (
            <div key={skin.uuid}>
              {skin.displayIcon ? (
                <div
                  // key={skin.uuid}
                  className="px-2"
                  onClick={() => selectedSkin(skin)}
                >
                  <img
                    src={
                      !skin.displayIcon
                        ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                        : skin.displayIcon
                    }
                    alt={skin.displayName}
                    className=" border-solid border-2 h-[60px] w-[60px] md:h-[100px] md:w-[100px] object-cover hover:bg-red-500"
                  ></img>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default WeaponSkinList;
