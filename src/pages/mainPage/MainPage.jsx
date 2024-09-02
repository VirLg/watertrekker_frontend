import React from "react";
import bg from "../../images/svg/bg_main_deck.svg";
import mp_right from "../../images/svg/mp_right.svg";
import mp_left_one from "../../images/svg/mp_left_one.svg";
import mp_left_two from "../../images/svg/mp_left_two.svg";
const MainPage = () => {
  return (
    <div className="container">
      {/* justify-between */}
      <div
        className="flex justify-between ml-auto mr-auto w-[1014px] h-[582px] "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}>
        <div className="w-[100%] h-[100%]">
          <div
            className="pt-[80px] h-[90px]"
            style={{
              backgroundImage: `url(${mp_left_one})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10% 10%",
            }}></div>
          <div
            className="pt-[80px]  w-[100%] h-[100%]"
            style={{
              backgroundImage: `url(${mp_left_two})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10% 10%",
            }}></div>
        </div>
        <div
          className="pt-[80px] w-[100%] h-[100%]"
          style={{
            backgroundImage: `url(${mp_right})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "70% 10%",
          }}></div>
      </div>
    </div>
  );
};

export default MainPage;
