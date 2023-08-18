// src/CameraCapture.js

import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const CameraCapture = ({ setCheckAttendance }) => {
  const webcamRef = useRef(null);
  const [imageData, setImageData] = useState(null);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageData(imageSrc);

    setCheckAttendance(true);
  }, []);

  const retakeImage = () => {
    setImageData(null);
  };

  return (
    <div>
      {imageData ? (
        <img src={imageData} alt="Captured" width="150" height="150" />
      ) : (
        <Webcam
          audio={false}
          height="200px"
          width="200px"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      )}

      {imageData ? (
        <button onClick={retakeImage} style={{ padding: "8px", margin: "8px" }}>
          Retake Image
        </button>
      ) : (
        <button
          onClick={captureImage}
          style={{ padding: "8px", margin: "8px" }}
        >
          Capture Image
        </button>
      )}
    </div>
  );
};

export default CameraCapture;
