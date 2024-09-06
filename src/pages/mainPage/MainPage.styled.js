import styled from "@emotion/styled";
import bg from "../../images/svg/bg_main_deck.svg";
import boolb_mp from "../../images/svg/boolb_mp.svg";

export const ContainerDiv = styled.div`
  margin-top: 49px;
  display: flex;
`;
export const MPDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  //   width: 100%;
  height: 660px;
  background-image: url(${bg}), url(${boolb_mp});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0% 100%;

  //   @media (max-width: 992px) {
  //     height: 400px; // Adjust height for screens smaller than 992px
  //     background-size: cover; // Make background cover the whole element
  //   }

  //   @media (max-width: 768px) {
  //     height: 300px; // Adjust height for screens smaller than 768px
  //     flex-direction: column; // Change layout for smaller screens if needed
  //   }

  //   @media (max-width: 576px) {
  //     height: 200px; // Adjust height for screens smaller than 576px
  //     background-position: center bottom; // Change background position
  //   }
`;
export const LeftContainerOneDiv = styled.div`
  width: 439px;
  height: 90px;
`;
export const LeftContainerTwoDiv = styled.div`
  width: 439px;
  height: 184px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const RightContainerDiv = styled.div`
  width: 494px;
  height: 330px;
  margin-top: 58px;
  margin-left: 81px;
`;
