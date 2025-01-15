import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleCategorySelect = (category) => {
    setCategory(category);
    setQuestion('');
    setAnswer('');
  };

  const handleShowAnswer = () => {
    if (category === 'Python') {
      setQuestion('What is a Python decorator?');
      setAnswer('A Python decorator is a function that modifies the behavior of another function.');
    } else if (category === 'Java') {
      setQuestion('What is the difference between JDK and JRE?');
      setAnswer('JDK (Java Development Kit) includes JRE and development tools like compilers, while JRE (Java Runtime Environment) only includes the libraries and the JVM.');
    } else if (category === 'ReactJS') {
      setQuestion('What is a React component?');
      setAnswer('A React component is a JavaScript function or class that optionally accepts inputs (called "props") and returns a React element that describes how a section of the UI should appear.');
    }
  };

  return (
    <div>
      <h1>Interview Practice</h1>
      <div>
        <button onClick={() => handleCategorySelect('Python')}>Python</button>
        <button onClick={() => handleCategorySelect('Java')}>Java</button>
        <button onClick={() => handleCategorySelect('ReactJS')}>ReactJS</button>
      </div>

      {category && (
        <div>
          <h2>{category} Question</h2>
          <button onClick={handleShowAnswer}>Show Question</button>
        </div>
      )}

      {question && (
        <QuestionItem question={question} answer={answer} />
      )}
    </div>
  );
};

export default QuestionList;
