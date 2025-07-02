import React, { useEffect, useState } from "react";
import styled from "./RandomColor.module.css";
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomNumber(len) {
    return Math.floor(Math.random() * len);
  }
  function selectrgbColor() {
    let r = randomNumber(256);
    let g = randomNumber(256);
    let b = randomNumber(256);
    const rgbColor = `rgb(${r},${g},${b})`;
    console.log(rgbColor);
    setColor(rgbColor);
  }
  function selecthexColor() {
    const hex = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    console.log(hexColor);

    setColor(hexColor);
  }
  function RandomColorgenerator() {
    typeOfColor == "hex" ? selecthexColor() : selectrgbColor();
  }
  useEffect(() => {
    typeOfColor === "rgb" ? selectrgbColor() : selecthexColor();
  }, [typeOfColor]);
  return (
    <div className={styled.container} style={{ background: color }}>
      <div className={styled.buttons}>
        <button onClick={() => setTypeOfColor("rgb")}> RGB Color </button>
        <button onClick={() => setTypeOfColor("hex")}> Hex Color </button>
        <button onClick={RandomColorgenerator}> Random Color </button>
      </div>
      <div className={styled.colortext}>
        <h1>{`Type Of Color ${typeOfColor} : ${color} `}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
