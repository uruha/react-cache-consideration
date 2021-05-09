export const fetchTodoList = () => fetch(
  'https://5d25e705eeb36400145c5771.mockapi.io/api/v1/todo'
).then(res => res.json());
