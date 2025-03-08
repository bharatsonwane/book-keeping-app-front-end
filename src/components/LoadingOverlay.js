import React from "react";

function LoadingOverlay() {
  return (
    <div className="loadingOverlay">
      <div className="loadingOverlay__background" />
      <div className="text-center">
        <div className="spinner-border text-primary" role="status" />
        <p className="visually-hidden">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingOverlay;
