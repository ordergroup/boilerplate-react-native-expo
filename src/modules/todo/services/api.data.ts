import { TodoRequest, TodoResponse } from '@/modules/todo/services/api.types';
import { Todo } from '../../../models/Todo';

export const processTodoResponse = (response: TodoResponse): Todo => ({
  userId: response.userId,
  id: response.id,
  title: response.title,
  completed: Boolean(response.completed),
});

export const prepareTodoRequest = (todo: Todo): TodoRequest => ({
  userId: todo.userId,
  id: todo.id,
  title: todo.title,
  completed: todo.completed,
});

export const processGetTodosResponse = (response: TodoResponse[]): Todo[] => {
  return response.map(todo => {
    return {
      userId: todo.userId,
      id: todo.id,
      title: todo.title,
      completed: Boolean(todo.completed),
    };
  });
};
