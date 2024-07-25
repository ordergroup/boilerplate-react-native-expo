import { Todo } from '@/models/Todo';
import { baseApi } from '@/modules/app/services/api';
import {
  processGetTodosResponse,
  processTodoResponse,
} from '@/modules/dashboard/services/api.data';
import { TodoRequest } from '@/modules/dashboard/services/api.types';

export const todosApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['Todo'] })
  .injectEndpoints({
    endpoints: builder => ({
      createTodo: builder.mutation<Todo, TodoRequest>({
        query: query => ({
          url: 'todos',
          method: 'POST',
          body: query,
        }),
        invalidatesTags: ['Todo'],
        transformResponse: processTodoResponse,
      }),
      getTodos: builder.query<Todo[], void>({
        query: () => 'todos',
        providesTags: ['Todo'],
        transformResponse: processGetTodosResponse,
      }),
      updateTodo: builder.mutation<Todo, TodoRequest>({
        query: query => ({
          url: 'todos',
          method: 'PUT',
          body: query,
        }),
        invalidatesTags: ['Todo'],
        transformResponse: processTodoResponse,
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
