export const CONFIG = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL,
  enableMocks: ['true', 'True'].includes(
    process.env.EXPO_PUBLIC_ENABLE_MOCKS || 'false',
  ),
};
