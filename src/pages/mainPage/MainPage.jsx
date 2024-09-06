import React from "react";
import {
  MPDiv,
  ContainerDiv,
  LeftContainerOneDiv,
  LeftContainerTwoDiv,
  RightContainerDiv,
} from "./MainPage.styled";

import mp_right from "../../images/svg/mp_right.svg";
import mp_left_one from "../../images/svg/mp_left_one.svg";
import mp_left_two from "../../images/svg/mp_left_two.svg";
const MainPage = () => {
  return (
    <ContainerDiv className="container">
      {/* justify-between */}

      <div className=" mt-[31px] ">
        <LeftContainerOneDiv>
          <img src={mp_left_one} alt="" />
        </LeftContainerOneDiv>
        <LeftContainerTwoDiv>
          <img src={mp_left_two} alt="" />
        </LeftContainerTwoDiv>
        <button className="button_one">Try tracker</button>
      </div>
      <RightContainerDiv>
        <img src={mp_right} alt="" />
      </RightContainerDiv>
    </ContainerDiv>
  );
};

export default MainPage;
