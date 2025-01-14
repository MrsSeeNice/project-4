.question-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.question-form label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

.question-form input,
.question-form textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.question-form button {
    align-self: flex-start;
    background-color: #0077b6; /* Blue button */
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.question-form button:hover {
    background-color: #005f8d;
}
