import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { wordOrNumber, fontColor, backgroundcolor } = useParams();

  return (
    <div>
      {!wordOrNumber ? (
        <p>Welcome</p>
      ) : !isNaN(wordOrNumber) ? (
        <p> The number is: {wordOrNumber} </p>
      ) : fontColor || backgroundcolor ? (
        <p style={{ color: fontColor, backgroundColor: backgroundcolor }}>
          The word is: {wordOrNumber}
        </p>
      ) : (
        <p> The word is: {wordOrNumber} </p>
      )}
    </div>
  );
};

export default Home;