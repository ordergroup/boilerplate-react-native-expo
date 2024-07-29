import { CONFIG } from '@/constants/config';

export async function enableMocking() {
  if (!CONFIG.enableMocks) {
    return;
  }

  await import('./msw.polyfills');
  const { server } = await import('./server');
  server.listen();
}
