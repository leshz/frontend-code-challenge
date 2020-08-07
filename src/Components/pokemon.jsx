import React from "react";

export const Pokemon = ({ Name, img, Types }) => {
  const types = Types.map((type) => (
    <span className={`type ${type.toLowerCase()}`}>{type}</span>
  ));

  return (
    <li>
      <img src={img} alt="" />
      <div className="info">
        <h1>
          <span className="hl">{Name}</span>
        </h1>
        {types}
      </div>
    </li>
  );
};
