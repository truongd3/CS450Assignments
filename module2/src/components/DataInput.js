import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';

function DataInput({ id, initialName, onNameChange }) {
  const [name, setName] = useState(initialName);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(id, newName);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
      <TextField
        label={`Line ${id}`}
        value={name}
        onChange={handleNameChange}
        variant="outlined"
      />
    </Box>
  );
}

export default DataInput;
