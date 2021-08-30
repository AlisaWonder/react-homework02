import React from "react";

const Counter = (props) => {
  console.log(props);

  const tags = [];

  const formValue = () => {
    return props.value === 0
      ? "Ноль"
      : props.value < 0
      ? "В минус не уходим"
      : props.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };

  //   const handleIncrement = (productId) => {
  //     console.log(productId);
  //     setValue(value + 1);
  //   };

  //   const handleDecrement = (productId) => {
  //     console.log(productId);
  //     setValue(value - 1);
  //   };

  return (
    <>
      <h4>{props.name}</h4>
      {/* {props.children} */}
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
