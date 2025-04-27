import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//TODO: FSD Исправить порядок слоев
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { type RootState } from '@/app/providers/StoreProvider';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_API_URL,
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
