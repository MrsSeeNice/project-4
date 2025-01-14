import React, { useState } from 'react';

const AnswerForm = ({ questionId, onAnswerSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!answer.trim()) {
            alert('Answer cannot be empty!');
            return;
        }

        const newAnswer = {
            question_id: questionId,
            content: answer,
        };

        try {
            const response = await fetch('http://localhost:5000/api/questions/answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAnswer),
            });

            if (response.ok) {
                const savedAnswer = await response.json();
                setAnswer(''); 
                onAnswerSubmit(savedAnswer); 
            } else {
                console.error('Failed to save answer');
            }
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="answer-form">
            <textarea
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows="4"
                required
            ></textarea>
            <button type="submit">Submit Answer</button>
        </form>
    );
};

export default AnswerForm;
