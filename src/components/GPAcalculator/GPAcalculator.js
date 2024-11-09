import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';
import './GPAcalculator.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GPACalculator = () => {
  const [subjects, setSubjects] = useState([{ name: '', marks: '' }]);
  const [result, setResult] = useState(null);

  const handleChange = (index, event) => {
    const values = [...subjects];
    values[index][event.target.name] = event.target.value;
    setSubjects(values);
  };

  const handleAdd = () => {
    setSubjects([...subjects, { name: '', marks: '' }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/gpa/calculate', { subjects });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const chartData = {
    labels: subjects.map((item) => item.name),
    datasets: [
      {
        label: 'Marks',
        data: subjects.map((item) => parseFloat(item.marks)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="gpa-calculator-container">
      <h2>GPA Calculator</h2>
      <form onSubmit={handleSubmit}>
        {subjects.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Subject Name"
              value={item.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="marks"
              placeholder="Marks (0 - 100)"
              value={item.marks}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAdd}>Add Subject</button>
        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div>
            <br/>
          <p>GPA: {result.gpa}</p>
          <div>
            <br/>
            <h3>Grades</h3>
            <ul>
              {result.grades.map((grade, index) => (
                <li key={index}>
                  {grade.subject}: {grade.grade}
                </li>
              ))}
            </ul>
          </div>
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GPACalculator;
