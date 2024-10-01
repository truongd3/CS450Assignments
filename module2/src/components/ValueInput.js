import React, { useState } from 'react';

function ValueInput({ id, color, onValueChange }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    onValueChange(id, newValue);
  };

  return (
    <div>
      <input
        type="number"
        id={`value${color}${id}`}
        value={value}
        onChange={handleChange}
        placeholder={`Value year ${id}`}
      />
    </div>
  );
}

export default ValueInput;
