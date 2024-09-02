import { Metadata } from "next";
import TodoList from "./todo-list";

export const metadata: Metadata = {
  title: 'Todo List',
};

const TodoListPage = () => {
  return (
    <>
      <TodoList />
    </>
  );
};

export default TodoListPage;