import React from "react";
import {
  MainContainerDiv,
  LeftContainerDiv,
  MPContent,
  MPTitle,
  RightContainerDiv,
  BGimg,
  RightContantDiv,
  ListItem,
} from "./MainPage.styled";
import mpright_mobile from "../../images/svg/mpright_mobile.svg";
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
        <RightContantDiv>
          <h2>Why drink water</h2>
          <ul style={{ paddingLeft: "0px" }}>
            <ListItem className="list_marker">
              Supply of nutrients to all organs
            </ListItem>
            <ListItem className="list_marker">
              Providing oxygen to the lungs
            </ListItem>
            <ListItem className="list_marker">
              Maintaining the work of the heart
            </ListItem>
            <ListItem className="list_marker">
              Release of processed substances
            </ListItem>
            <ListItem className="list_marker">
              Ensuring the stability of the internal environment
            </ListItem>
            <ListItem className="list_marker">
              Maintaining within the normal temperature
            </ListItem>
            <ListItem className="list_marker">
              Maintaining an immune system capable of resisting disease
            </ListItem>
          </ul>
        </RightContantDiv>
      </RightContainerDiv>
    </MainContainerDiv>
  );
};

export default MainPage;
