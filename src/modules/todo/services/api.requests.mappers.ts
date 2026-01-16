import { Todo } from '@/modules/todo/models/Todo';
import { TodoRequestDto } from '@/modules/todo/services/api.requests.dto';

export const toTodoRequestDto = (todo: Todo): TodoRequestDto => ({
  user_id: todo.userId,
  id: todo.id,
  title: todo.title,
  completed: todo.completed,
});
