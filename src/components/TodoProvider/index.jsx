import TodoContext from "./TodoContext";
import { useState } from "react";
import { useEffect } from "react";

const TODOS = "todos";

function TodoProvider({ children }) {
  const [showDialog, setShowDialog] = useState(false);

  const savedTodo = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodo ? JSON.parse(savedTodo) : []);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const newTodo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, newTodo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      // criar uma nova lista sem o todo removido
      return prevState.filter((t) => t.id !== todo.id);
    });
  };

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        openFormTodoDialog,
        closeFormTodoDialog,
        selectedTodo,
      }}
    >
      {children}
    </TodoContext>
  );
}
export default TodoProvider;
