import React from "react";
import bg from "../../images/svg/bg_main_deck.svg";
import boolb_mp from "../../images/svg/boolb_mp.svg";
import mp_right from "../../images/svg/mp_right.svg";
import mp_left_one from "../../images/svg/mp_left_one.svg";
import mp_left_two from "../../images/svg/mp_left_two.svg";
const MainPage = () => {
  return (
    <div className="container mt-[49px]">
      {/* justify-between */}
      <div
        className="flex  ml-auto mr-auto w-[100%] h-[660px]  "
        style={{
          backgroundImage: `url(${bg}),url(${boolb_mp}`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}>
        <div className=" mt-[31px] pl-[198px]">
          <div
            className="w-[439px] h-[90px]"
            style={{
              backgroundImage: `url(${mp_left_one})`,
              backgroundRepeat: "no-repeat",
            }}></div>
          <div
            className=" w-[439px] h-[184px] mt-[24px] mb-[24px]"
            style={{
              backgroundImage: `url(${mp_left_two})`,
              backgroundRepeat: "no-repeat",
            }}></div>
          <button className="button_one">Try tracker</button>
        </div>
        <div
          className=" w-[494px] h-[332px] mt-[65px] ml-[81px]"
          style={{
            backgroundImage: `url(${mp_right})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}></div>
      </div>
    </div>
  );
};

export default MainPage;
