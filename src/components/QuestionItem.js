import React from 'react';

function QuestionItem({ question, answer, showAnswer, toggleAnswer }) {
  return (
    <div className="question-item">
      <p className="question">{question}</p>
      {showAnswer && <p className="answer">{answer}</p>}
      <button className="toggle-answer" onClick={toggleAnswer}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
}

export default QuestionItem;
