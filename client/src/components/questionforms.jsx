import React, { useState } from 'react';

const QuestionForm = ({ onQuestionSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert('Both title and description are required!');
            return;
        }

        const newQuestion = {
            title,
            description,
        };

        try {
            const response = await fetch('http://localhost:5000/api/questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newQuestion),
            });

            if (response.ok) {
                const savedQuestion = await response.json();
                setTitle(''); 
                setDescription('');
                onQuestionSubmit(savedQuestion); 
            } else {
                console.error('Failed to save question');
            }
        } catch (error) {
            console.error('Error submitting question:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="question-form">
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter the title of your question"
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Provide more details about your question"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button type="submit">Submit Question</button>
        </form>
    );
};

export default Quest
