import React, { useState } from 'react';
import QuestionItem from './components/QuestionItem.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = {
    python: [
      { question: "What is a Python decorator?", answer: "A Python decorator is a function that modifies the behavior of another function." },
      { question: "What is a Python list comprehension?", answer: "List comprehension is a concise way to create lists in Python." }
    ],
    java: [
      { question: "What is the difference between JDK and JRE?", answer: "JDK is a software development kit for Java, while JRE is a runtime environment for running Java applications." },
      { question: "What is a Java Stream?", answer: "Streams are used to process collections of objects in a functional style." }
    ],
    reactjs: [
      { question: "What is JSX in React?", answer: "JSX is a syntax extension for JavaScript, which looks similar to HTML and is used to describe what the UI should look like in React." },
      { question: "What is a React Hook?", answer: "Hooks allow you to use state and other React features without writing a class." }
    ]
  };

  const handleButtonClick = (topic) => {
    setSelectedTopic(questions[topic]);
    setQuestionIndex(0);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const nextQuestion = () => {
    if (questionIndex < selectedTopic.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Fullstack Interview Practice</h1>
        <div className="buttons">
          <button onClick={() => handleButtonClick('python')}>Python</button>
          <button onClick={() => handleButtonClick('java')}>Java</button>
          <button onClick={() => handleButtonClick('reactjs')}>ReactJS</button>
        </div>
      </div>

      {selectedTopic && (
        <div className="question-container">
          <div className="question-card">
            <QuestionItem
              question={selectedTopic[questionIndex].question}
              answer={selectedTopic[questionIndex].answer}
              showAnswer={showAnswer}
              toggleAnswer={toggleAnswer}
            />
            <div className="action-buttons">
              <button onClick={toggleAnswer}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
              <button onClick={nextQuestion}>Next Question</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
