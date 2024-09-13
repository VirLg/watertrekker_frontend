import styled from "@emotion/styled";
import bg from "../../images/svg/bg_main_deck.svg";
import boolb_mp from "../../images/svg/boolb_mp.svg";
import pic_2_mobile from "../../images/svg/pic_2_mobile.svg";
import pic_2_tablet from "../../images/svg/pic_2_tablet.svg";
import pic_3_tablet from "../../images/svg/pic_3_tablet.svg";
import mp_left_two from "../../images/svg/mp_left_two.svg";
import marker from "../../images/svg/marker.svg";
import vectorA from "../../images/svg/vectorA.svg";
import vectorB from "../../images/svg/vectorB.svg";
import vectorC from "../../images/svg/vectorC.svg";

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
  // background-size: contain;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  @media screen and (min-width: 1404px) {
    display: flex;
  }

  @media (max-width: 1403px) {
    // background-image: url(${pic_3_tablet});
  }
  @media (max-width: 767px) {
    display: block;
  }
  background-image: url(${vectorC}), url(${vectorA}), url(${vectorB});
  padding-top: 49px;
  display: block;
  padding-bottom: 40px;
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

export const RightContainerDiv = styled.div`
  @media screen and (min-width: 1404px) {
  }
  @media (max-width: 1403px) {
    margin-left: 0px;
    padding_left: 0px;
  }
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
export const RightContantDiv = styled.div`
  width: 100%;
  border-radius: 10px;
  opacity: 0px;
  // background-color: rgba(236, 242, 255, 1);

  @media screen and (min-width: 1404px) {
  }
  @media (max-width: 1403px) {
    width: 494px;
    height: auto;
  }
  @media (max-width: 767px) {
    width: 248px;
    height: 368px;
    background-color: rgba(236, 242, 255, 1);
    outline: 1px solid green;
    padding: 24px 16px;

    // padding: 24px 16px 24px 16px;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  display: inline-flex;
  align-items: baseline;

  text-wrap: wrap;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &::before {
    content: "";
    width: 14px;
    height: 14px;

    background-image: url(${marker});
    background-repeat: no-repeat;
    background-size: content;
    background-position: left;
    margin-right: 16px;
  }
`;
