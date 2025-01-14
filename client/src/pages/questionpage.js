import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnswerList from '../components/AnswerList';
import AnswerForm from '../components/AnswerForm';

const QuestionPage = () => {
    const { questionId } = useParams();
    const [question, setQuestion] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/questions/${questionId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch question details');
                }
                const data = await response.json();
                setQuestion(data.question);
                setAnswers(data.answers);
            } catch (err) {
                console.error(err);
                setError('Error fetching question details. Please try again later.');
            }
        };

        fetchQuestion();
    }, [questionId]);

    const handleAnswerSubmit = (newAnswer) => {
        setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
    };

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!question) {
        return <p>Loading question...</p>;
    }

    return (
        <div className="question-page">
            <h1>{question.title}</h1>
            <p>{question.description}</p>
            <small>Posted on: {new Date(question.created_at).toLocaleDateString()}</small>

            <div className="answers-section">
                <AnswerList answers={answers} />
                <AnswerForm questionId={questionId} onAnswerSubmit={handleAnswerSubmit} />
            </div>
        </div>
    );
};

export default QuestionPage;
