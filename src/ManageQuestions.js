import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function ManageQuestions() {
  const [questions, setQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const editSectionRef = useRef(null);
  const detailsSectionRef = useRef(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:50002/questions');
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:50002/questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const handleEdit = (question) => {
    setIsEditing(true);
    setCurrentQuestion(question);
    if (editSectionRef.current) {
      editSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:50002/questions/${currentQuestion.id}`, currentQuestion);
      fetchQuestions();
      setIsEditing(false);
      setCurrentQuestion(null);
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  const handleViewDetails = (question) => {
    setSelectedQuestion(question);
    if (detailsSectionRef.current) {
      detailsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Manage Questions</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {questions.map((question) => (
          <li key={question.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
              <span 
                onClick={() => handleViewDetails(question)} 
                style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue', display: 'block' }}
              >
                {question.text}
              </span>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                {question.options.map((option, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{option}</li>
                ))}
              </ul>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => handleEdit(question)}
                style={{ padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}
              >
                Update
              </button>
              <button 
                onClick={() => handleDelete(question.id)}
                style={{ padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#f44336', color: 'white', cursor: 'pointer' }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {selectedQuestion && (
        <div 
          style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}
          ref={detailsSectionRef}
        >
          <h2>Question Details</h2>
          <p><strong>Question:</strong> {selectedQuestion.text}</p>
          <p><strong>Options:</strong> {selectedQuestion.options.join(', ')}</p>
          <p><strong>Correct Answer:</strong> {selectedQuestion.correctAnswer}</p>
          <p><strong>Category:</strong> {selectedQuestion.category}</p>
          <button 
            onClick={() => setSelectedQuestion(null)}
            style={{ padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#555', color: 'white', cursor: 'pointer' }}
          >
            Close
          </button>
        </div>
      )}
      {isEditing && currentQuestion && (
        <div 
          style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}
          ref={editSectionRef}
        >
          <h2>Edit Question</h2>
          <form onSubmit={handleUpdate}>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Question Text:</label>
              <input
                type="text"
                name="text"
                value={currentQuestion.text}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Options (comma-separated):</label>
              <input
                type="text"
                name="options"
                value={currentQuestion.options.join(', ')}
                onChange={(e) => handleInputChange({
                  target: { name: 'options', value: e.target.value.split(',').map(opt => opt.trim()) }
                })}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Correct Answer:</label>
              <input
                type="text"
                name="correctAnswer"
                value={currentQuestion.correctAnswer}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Category:</label>
              <input
                type="text"
                name="category"
                value={currentQuestion.category}
                onChange={handleInputChange}
                required
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ display: 'flex',  gap: '10px' }}>
              <button 
                type="submit"
                style={{ padding: '10px 20px', border: 'none', borderRadius: '3px', backgroundColor: '#2196F3', color: 'white', cursor: 'pointer' }}
              >
                Update Question
              </button>
              <button 
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setCurrentQuestion(null);
                }}
                style={{ padding: '10px 20px', border: 'none', borderRadius: '3px', backgroundColor: '#555', color: 'white', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ManageQuestions;
