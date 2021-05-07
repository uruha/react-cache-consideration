import React from 'react';
import { useQuery } from 'react-query';
import { fetchTodoList } from '../queries';
import { TodoList } from '../types';

const List: React.VFC = () => {
  const { data } = useQuery<TodoList>('todolist', fetchTodoList);

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.detail}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
