import React from "react";
import QuestionItem from "./QuestionItem";

const QuestionList = ({ questions, onDelete, onUpdate }) => {
  return (
    <div>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default QuestionList;
