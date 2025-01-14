INSERT INTO Users (name, email, password_hash) VALUES 
('Alice', 'alice@example.com', 'hashed_password1'),
('Bob', 'bob@example.com', 'hashed_password2');

INSERT INTO Questions (user_id, title, description) VALUES 
(1, 'Why is the sky blue?', 'Looking for a detailed scientific explanation.'),
(2, 'What is the meaning of red in cultures?', 'I want to learn about the symbolism.');

INSERT INTO Answers (question_id, user_id, content) VALUES 
(1, 2, 'The sky appears blue because of the scattering of sunlight.'),
(2, 1, 'Red often represents passion and power in many cultures.');
