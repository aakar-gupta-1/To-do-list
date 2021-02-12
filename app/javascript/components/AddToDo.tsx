import * as React from "react";
import { FormEvent } from "react";

interface AddTodoProps {
  addTodo: (newToDo: string) => void;
}

export const AddToDo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newToDo, setNewToDo] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newToDo);
    setNewToDo("");
  };

  return (
    <form>
      <input type="text" value={newToDo} onChange={handleChange} />
      <button type="button" onClick={handleSubmit}>
        Add item
      </button>
    </form>
  );
};
