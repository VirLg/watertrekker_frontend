import styled from "@emotion/styled";
import bg from "../../images/svg/bg_main_deck.svg";
import boolb_mp from "../../images/svg/boolb_mp.svg";
import pic_2_mobile from "../../images/svg/pic_2_mobile.svg";
import pic_2_tablet from "../../images/svg/pic_2_tablet.svg";
import pic_3_tablet from "../../images/svg/pic_3_tablet.svg";
import mp_left_two from "../../images/svg/mp_left_two.svg";

export const MPTitle = styled.h1`
  font-family: Roboto;
  text-align: left;
  font-weight: 700;
  margin: 0;
  @media screen and (min-width: 1404px) {
  }
  @media (max-width: 1403px) {
    font-size: 36px;
    line-height: 42px;
  }
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 32px;
  }
`;
export const MPContent = styled.h3`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-align: left;
  margin-top: 16px;
`;

export const MainContainerDiv = styled.div`
  background-image: url(${bg}), url(${boolb_mp});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  @media screen and (min-width: 1404px) {
    margin-top: 49px;
    display: flex;
  }

  @media (max-width: 1403px) {
    margin-top: 40px;
    background-image: url(${pic_3_tablet});
  }
  @media (max-width: 767px) {
    display: block;
  }
  margin-top: 49px;
`;

export const LeftContainerDiv = styled.div`
  //   width: 439px;
  //   height: 384px;

  outline: 1px solid blue;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0% 100%;
  margin-bottom: 24px;
  @media screen and (min-width: 1404px) {
    background-image: url(${mp_left_two});
    height: 332px;
  }
  @media (max-width: 1403px) {
    background-image: url(${pic_2_tablet});
    height: 186px;
  }
  @media (max-width: 767px) {
    background-image: url(${pic_2_mobile});

    height: 384px;
  }
`;

// export const RightContainerDiv = styled.div`
//   width: 494px;
//   height: 330px;
//   margin-top: 58px;
//   margin-left: 81px;
// `;
// export const RightContainerDiv = styled.div`
//   //   width: 100%;
//   //   height: 100%;
//   //   outline: 1px solid blue;
//   //   background-repeat: no-repeat;
//   //   background-size: contain;

//   //   @media screen and (min-width: 1404px) {
//   //     background-image: url(${mp_right});
//   //     height: 332px;
//   //   }
//   //   @media (max-width: 1403px) {
//   //     background-image: url(${mp_right});
//   //     height: 332px;
//   //   }
//   //   @media (max-width: 767px) {
//   //     background-image: url(${pic_1_mobile});
//   //     height: 416px;
//   //   }
// `;
export const RightContainerDiv = styled.div`
  @media screen and (min-width: 1404px) {
  }
  @media (max-width: 1403px) {
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const BGimg = styled.img`
  border-radius: 10px;
  opacity: 0px;
  @media (max-width: 1403px) {
    width: 494px;
    height: 332px;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: auto;
  }
`;
