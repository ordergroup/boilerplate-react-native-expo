import { CONFIG } from '@/constants/config';
import { TodoResponse } from '@/modules/todo/services/api.types';
import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

export const todoHandlers = [
  http.get<{}, DefaultBodyType, TodoResponse[]>(
    `${CONFIG.apiUrl}/todos`,
    async ({ params, request, cookies, requestId }) => {
      const response = [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: true,
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
        },
      ];

      await delay();

      return HttpResponse.json(response);
    },
  ),
];
