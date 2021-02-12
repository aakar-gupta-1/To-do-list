import * as React from "react";

interface IProps {
  todos: Array<{ text: string }>;
}

const ToDos = (props: IProps) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
};

export default ToDos;
