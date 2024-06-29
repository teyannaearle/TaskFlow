import { useState } from "react";

const FilterToDo = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <select value={selected} onChange={handleChange} className="header__nav-filter">
      <option value="" disabled hidden>
        Filter{" "}
      </option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  );
};

export default FilterToDo;
