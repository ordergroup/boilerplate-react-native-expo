import { baseApi } from '@/modules/app/services/api';
import { Todo } from '@/modules/todo/models/Todo';
import { toTodoRequestDto } from '@/modules/todo/services/api.requests.mappers';
import {
  toTodo,
  toTodoList,
} from '@/modules/todo/services/api.responses.mapper';

export const todosApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Todo'] })
  .injectEndpoints({
    endpoints: builder => ({
      createTodo: builder.mutation<Todo, Todo>({
        query: todo => ({
          url: 'todos',
          method: 'POST',
          body: toTodoRequestDto(todo),
        }),
        invalidatesTags: ['Todo'],
        transformResponse: toTodo,
      }),
      getTodos: builder.query<Todo[], void>({
        query: () => ({
          url: 'todos',
          method: 'GET',
        }),
        providesTags: ['Todo'],
        transformResponse: toTodoList,
        keepUnusedDataFor: 0, // Disable caching
      }),
      updateTodo: builder.mutation<Todo, Todo>({
        query: todo => ({
          url: 'todos',
          method: 'PUT',
          body: toTodoRequestDto(todo),
        }),
        invalidatesTags: ['Todo'],
        transformResponse: toTodo,
      }),
      deleteTodo: builder.mutation<string, number>({
        query: todoId => ({
          url: `todos?id=${todoId}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Todo'],
      }),
    }),
  });

export const {
  useCreateTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
