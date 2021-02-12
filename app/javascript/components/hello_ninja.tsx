import * as React from "react";
import { useState } from "react";
import { AddToDo } from "./AddToDo";
import ToDo from "./toDo";

const HelloNinja: React.FC = () => {
  // const { name } = props;
  type Todo = { text: string };

  const initialTodos: Array<Todo> = [
    { text: "Practice React" },
    { text: "Learn typescript" },
  ];

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const addTodo: (newTodo: string) => void = (newTodo) => {
    newTodo.trim() !== "" && setTodos([...todos, { text: newTodo }]);
  };

  return (
    <React.Fragment>
      <ToDo todos={todos} />
      <AddToDo addTodo={addTodo} />
    </React.Fragment>
  );
};

export default HelloNinja;
