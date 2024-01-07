import React, { useState } from "react";

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
  task: string;
};

export default function Page(createnewTodo: ToDo) {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const addTask = () => {
    const newTask = {
      id: Math.random(),
      task: "task",
      completed: false,
    };
    setToDoList([...toDoList, newTask]);
  };

  return <div>page</div>;
}
