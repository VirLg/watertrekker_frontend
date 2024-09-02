import React from "react";

const MainPage = () => {
  return (
    <div className="container">
      <div className="flex justify-between ml-auto mr-auto w-[1014px]">
        <div>
          <h1>Water consumption tracker</h1>
          <h3>Record daily water intake and track</h3>
          <h4>Tracker Benefits</h4>
          <ul>
            <li>Habit drive</li>
            <li>View statistics</li>
            <li>Personal rate setting</li>
          </ul>
        </div>

        <div>
          <h3>Why drink water</h3>
          <ul>
            <li>Supply of nutrients to all organs</li>
            <li>Providing oxygen to the lungs</li>
            <li>Maintaining the work of the heart</li>
            <li>Release of processed substances</li>
            <li>Ensuring the stability of the internal environment</li>
            <li>Maintaining within the normal temperature</li>
            <li>Maintaining an immune system capable of resisting disease</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
