import React from "react";

const Verify = ({ isPanNumberValid }) => {
  const handleVerify = () => {
    if (isPanNumberValid) {
      alert("Valid PAN!");
    } else {
      alert("Invalid PAN.");
    }
  };

  return (
    <div className="verify-container">
      <button className="verifybtn" onClick={handleVerify}>
        Verify
      </button>
    </div>
  );
};

export default Verify;
