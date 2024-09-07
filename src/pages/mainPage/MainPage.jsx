import React from "react";
import {
  MainContainerDiv,
  LeftContainerDiv,
  MPContent,
  MPTitle,
  RightContainerDiv,
  BGimg,
} from "./MainPage.styled";
import pic_1_mobile from "../../images/svg/pic_1_mobile.svg";
import mp_right from "../../images/svg/mp_right.svg";

const MainPage = () => {
  return (
    <MainContainerDiv className="container">
      <div>
        <LeftContainerDiv>
          <MPTitle>Water consumption tracker</MPTitle>
          <MPContent>Record daily water intake and track</MPContent>
        </LeftContainerDiv>

        <button className="button_one">Try tracker</button>
      </div>
      <RightContainerDiv>
        <picture>
          <source srcSet={mp_right} media="(min-width: 1404px)" />
          <source
            srcSet={mp_right}
            media="(max-width: 1403px) and (min-width: 768px)"
          />
          <source srcSet={pic_1_mobile} media="(max-width: 767px)" />
          <BGimg src={mp_right} alt="Decorative element of the right section" />
        </picture>
      </RightContainerDiv>
    </MainContainerDiv>
  );
};

export default MainPage;
