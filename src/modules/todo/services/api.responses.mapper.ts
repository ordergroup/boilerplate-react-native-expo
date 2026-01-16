import { Todo } from '@/modules/todo/models/Todo';
import { TodoResponseDto } from '@/modules/todo/services/api.responses.dto';

export const toTodo = (response: TodoResponseDto): Todo => ({
  userId: response.user_id,
  id: response.id,
  title: response.title,
  completed: Boolean(response.completed),
});

export const toTodoList = (response: TodoResponseDto[]): Todo[] => {
  return response.map(todoDto => ({
    userId: todoDto.user_id,
    id: todoDto.id,
    title: todoDto.title,
    completed: Boolean(todoDto.completed),
  }));
};
