import React, { useState } from "react";

```
Requirements:

Declare a To-Do interface: Define a ToDo interface with at least two properties: id (number) and task (string).

State Management: Create a state variable called toDos that is an array of ToDo items. Initialize it as an empty array.

Adding Tasks: Implement a function named addTask that takes a string argument (the task description). This function should create a new ToDo object with a unique id and the given task description, then add this object to the toDos array.

Displaying Tasks: Implement a function named displayTasks that logs all tasks in the toDos array to the console, showing both the id and the task description.

Unique IDs: Ensure each task has a unique id when it's added to the list.

Hints:

Consider how you'll generate unique IDs for each task.
Think about the TypeScript types you'll use for variables and function parameters.
Remember to initialize your state array before trying to add or display tasks.```;

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
  task: string;
};

export default function Page(createnewTodo: ToDo) {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);

  const toToItems = [];

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
