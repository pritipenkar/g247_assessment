import React, { useState } from "react";
import PanCard from "./PanCard";
import PanNumberField from "./PanNumberField";
import Verify from "./Verify";

const Wrapper = () => {
  const [isPanNumberValid, setIsPanNumberValid] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 

  const handleClose = () => setIsVisible(false);

  return (
    isVisible && (
      <div className="main-wrapper">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>

        
        <div className="heading">
          <img
            className="securityimg"
            src="/security_icon.png"
            alt="security icon"
          />
          <div>
            <h1>PAN Verification</h1>
            <p>
              As per regulations, it is mandatory to verify your PAN details.
            </p>
          </div>
        </div>

        <div className="wrapper-content">
          <div className="pan-img">
            <PanCard />
          </div>
          <div className="input-verify-wrapper">
            <PanNumberField setPanNumberValid={setIsPanNumberValid} />

            <Verify isPanNumberValid={isPanNumberValid} />
          </div>
        </div>
      </div>
    )
  );
};

export default Wrapper;
