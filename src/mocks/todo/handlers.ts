import { CONFIG } from '@/constants/config';
import { TodoResponseDto } from '@/modules/todo/services/api.responses.dto';
import { DefaultBodyType, HttpResponse, delay, http } from 'msw';

export const todoHandlers = [
  http.get<{}, DefaultBodyType, TodoResponseDto[]>(
    `${CONFIG.apiUrl}/todos`,
    async ({ params, request, cookies, requestId }) => {
      const response = [
        {
          user_id: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: true,
        },
        {
          user_id: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
        },
        {
          user_id: 1,
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
