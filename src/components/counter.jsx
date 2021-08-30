import React from "react";

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  const tags = [];

  const formValue = () => {
    return value === 0 ? "Ноль" : value < 0 ? "В минус не уходим" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  return (
    <>
      <h4>{name}</h4>
      {/* {children} */}
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
