// src/CameraCapture.js

import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const CameraCapture = ({ setCheckAttendance }) => {
  const webcamRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [isCapture, setIsCapture] = useState(false);

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageData(imageSrc);
    setIsCapture(true);
    setCheckAttendance(true);
  }, []);

  return (
    <div>
      {!isCapture ? (
        <>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={captureImage}>Capture Image</button>
        </>
      ) : (
        ""
      )}

      {imageData && (
        <img src={imageData} alt="Captured" width="200" height="200" />
      )}
    </div>
  );
};

export default CameraCapture;
