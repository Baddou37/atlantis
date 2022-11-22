import React from "react";
import Boat from "../assets/images/boat.png";
import Form from "../components/Form";

const Recrew = () => {
  return (
    <div className="recrew_display">
      <div className="recrew">
        <img src={Boat} alt="" />
        <div className="text">
          <h2>Atlantes dans le bateau</h2>
        </div>
      </div>
      <div className="enrollment">
        <h2>Enrôlement</h2>

        <Form />
      </div>
    </div>
  );
};

export default Recrew;
