// src/AddQuestion.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AddQuestion() {
  const [question, setQuestion] = useState({
    text: '',
    options: '',
    correctAnswer: '',
    category: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:50002/questions', {
        ...question,
        options: question.options.split(',').map(opt => opt.trim()), // Convert options to array
      });
      setQuestion({
        text: '',
        options: '',
        correctAnswer: '',
        category: '',
      });
      alert('Question added successfully!');
      navigate('/manage-questions'); // Navigate to ManageQuestions page
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Add a New Question</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Question Text:</label>
          <input
            type="text"
            name="text"
            value={question.text}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Options (comma-separated):</label>
          <input
            type="text"
            name="options"
            value={question.options}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Correct Answer:</label>
          <input
            type="text"
            name="correctAnswer"
            value={question.correctAnswer}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ marginBottom: '5px' }}>Category:</label>
          <input
            type="text"
            name="category"
            value={question.category}
            onChange={handleChange}
            required
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <button 
          type="submit"
          style={{ padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer', fontSize: '16px' }}
        >
          Add Question
        </button>
      </form>
    </div>
  );
}

export default AddQuestion;
