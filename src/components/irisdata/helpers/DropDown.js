import React from "react";
import { useState } from "react";

const DropDown = ({ options, onSelectedXValueChange, dropdownlabel }) => {
  return (
    <div>
      <label>{dropdownlabel}</label>

      <select
        className="form-select bg-white text-dark form-select-md"
        name="pets"
        id="pet-select"
        onChange={(event) => onSelectedXValueChange(event.target.value)}
      >
        <option value="">--Please choose an option--</option>
        {options.map((d, i) => (
          <option key={i} value={d.label}>
            {d.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
