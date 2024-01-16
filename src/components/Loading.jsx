import React from "react";

function Loading() {
  return (
    <div style={{height:"80vh"}} className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1 className="ms-2">Loading . . . </h1>
    </div>
  );
}

export default Loading;
