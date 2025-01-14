import React, { useState, useEffect } from 'react';
import QuestionList from '../components/QuestionList';
import QuestionForm from '../components/QuestionForm';

const Dashboard = () => {
    const [questions, setQuestions] = useState([]);

    // Fetch questions on component mount
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/questions');
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    // Handle new question submission
    const handleQuestionSubmit = (newQuestion) => {
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard! Here you can view and manage questions about your favorite colors.</p>
            
            <div className="dashboard-content">
                <div className="form-section">
                    <h2>Ask a Question</h2>
                    <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
                </div>
                
                <div className="questions-section">
                    <h2>Your Questions</h2>
                    <QuestionList questions={questions} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
