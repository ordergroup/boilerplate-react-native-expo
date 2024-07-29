export interface TodoRequest {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
