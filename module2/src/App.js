import React, { useState } from 'react';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label, Tooltip } from 'recharts';
import ValueInput from "./components/ValueInput";
import DataInput from "./components/DataInput";
import { Box, Button } from '@mui/material';

const initialData = [
  { name: "2019", uv: 400, pv: 2400 },
  { name: "2020", uv: 300, pv: 2210 },
  { name: "2021", uv: 200, pv: 2290 },
  { name: "2022", uv: 278, pv: 2000 },
  { name: "2023", uv: 189, pv: 2900 },
  { name: "2024", uv: 239, pv: 3000 },
];

function App() {
  const [data, setData] = useState(initialData);
  const [yellowValues, setYellowValues] = useState({});
  const [greenValues, setGreenValues] = useState({});
  const [lineNames, setLineNames] = useState({ Yellow: "Yellow Data", Green: "Green Data" });

  const handleYellowValueChange = (id, value) => {
    setYellowValues((prevValues) => ({
      ...prevValues,
      [id]: Number(value),
    }));
  };

  const handleGreenValueChange = (id, value) => {
    setGreenValues((prevValues) => ({
      ...prevValues,
      [id]: Number(value),
    }));
    console.log(lineNames);
  };

  const handleGraphButtonClick = () => {
    const updatedData = data.map((item) => ({
      ...item,
      uv: yellowValues[item.name] || item.uv,
      pv: greenValues[item.name] || item.pv,
    }));

    setData(updatedData);
  };

  const handleLineNameChange = (id, newName) => {
    setLineNames((prevNames) => ({
      ...prevNames,
      [id]: newName,
    }));
  };

  return (
    <div className="App">
      <h1>We Help Your Business Compare Data</h1>

      <h2 style={{ color: "#fde293" }}>Yellow Data</h2>
      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <ValueInput id="2019" color="Yellow" onValueChange={handleYellowValueChange} />
        <ValueInput id="2020" color="Yellow" onValueChange={handleYellowValueChange} />
        <ValueInput id="2021" color="Yellow" onValueChange={handleYellowValueChange} />
        <ValueInput id="2022" color="Yellow" onValueChange={handleYellowValueChange} />
        <ValueInput id="2023" color="Yellow" onValueChange={handleYellowValueChange} />
        <ValueInput id="2024" color="Yellow" onValueChange={handleYellowValueChange} />
      </Box>

      <h2 style={{ color: "#81c995" }}>Green Data</h2>
      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <ValueInput id="2019" color="Green" onValueChange={handleGreenValueChange} />
        <ValueInput id="2020" color="Green" onValueChange={handleGreenValueChange} />
        <ValueInput id="2021" color="Green" onValueChange={handleGreenValueChange} />
        <ValueInput id="2022" color="Green" onValueChange={handleGreenValueChange} />
        <ValueInput id="2023" color="Green" onValueChange={handleGreenValueChange} />
        <ValueInput id="2024" color="Green" onValueChange={handleGreenValueChange} />
      </Box>

      <Box display="flex" justifyContent="center" gap={2} mb={4}>
        <DataInput id="Yellow" initialName={lineNames.uv} onNameChange={handleLineNameChange} />
        <DataInput id="Green" initialName={lineNames.pv} onNameChange={handleLineNameChange} />
      </Box>

      <Box display="flex" justifyContent="center" mb={4}>
        <Button variant="contained" color="primary" onClick={handleGraphButtonClick}>Graph</Button>
      </Box>

      <Box display="flex" justifyContent="center" mb={4}>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name">
            <Label value="Year" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Value" angle={-90} position="insideLeft" />
          </YAxis>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#f9ab00" name={lineNames.Yellow} />
          <Line type="monotone" dataKey="pv" stroke="#34a853" name={lineNames.Green} />
        </LineChart>
      </Box>
    </div>
  );
}

export default App;
