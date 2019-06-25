import React from "react";
import uuid from "uuid";
import Tuning from "../img/tuning.svg";
import Computer from "../img/computer-laptop.svg";
import Color from "../img/color-palette.svg";

const Feature = props => {
  const svgStyle = "h-6 w-6 fill-current"
  return (
    <div key={uuid.v4()} className="p-4 mb-4 md:w-1/3">
      <h4 className="text-2xl pb-4 inline-flex items-center content-center">
        {props.title.text === "Strategy" && (
          <Tuning className={svgStyle} />
        )}
        {props.title.text === "Creative" && (
          <Color className={svgStyle} />
        )}
        {props.title.text === "Technology" && (
          <Computer className={svgStyle} />
        )}
        <span className="pl-3 tracking-wide font-sans font-normal">
          {props.title.text}
        </span>
      </h4>
      <ul className="text-blue-100 leading-loose text-lg">
        {props.list.raw.map(item => (
          <li key={uuid.v4()}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature;
