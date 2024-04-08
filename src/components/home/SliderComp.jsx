import React from "react";
import Slider from "react-slick";
const SliderComp = () => {
  var settings = {
    // dots: true,
    infinite: true,
    autoplay:true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
            <div className="">
                <div className="text-5xl font-bold">En Kaliteli Ayakkabılar</div>
                <div className="text-lg my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dicta sequi? Dolorum in repellendus minima nostrum sunt fugiat commodi dolorem?</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-200 ">İncele</div>
            </div>
          <img width={800} height={800} src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eouisxtwymdgtlmtjivr/p-6000-ayakkab%C4%B1-1Tw8bs.png" alt="" />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
            <div className="">
                <div className="text-5xl font-bold">En Kaliteli Ayakkabılar</div>
                <div className="text-lg my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dicta sequi? Dolorum in repellendus minima nostrum sunt fugiat commodi dolorem?</div>
                <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex justify-center items-center bg-gray-200 ">İncele</div>
            </div>
          <img width={800} height={800} src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ecba19c-a2a3-4047-896e-46bbab267521/tc-7900-ayakkab%C4%B1s%C4%B1-f0v8MW.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
