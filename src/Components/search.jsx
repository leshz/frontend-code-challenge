import React, { useState } from "react";

export const Search = (props) => {
  const [value, setValue] = useState("");

  const onChangeInput = (e) => {
    const { value } = e.target;
    setValue(value);
    props.getValue(value);
  };

  return (
    <>
      <label htmlFor="maxCP" className="max-cp">
        <input type="checkbox" id="maxCP" />
        <small>Maximum Combat Points</small>
      </label>
      <input
        type="text"
        onChange={onChangeInput}
        className="input"
        value={value}
        placeholder="Pokemon or type"
      />
    </>
  );
};
