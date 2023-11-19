import { AxiosInstance, AxiosResponse } from 'axios';
import { stringify } from 'qs';

import { BASE_URL } from 'api/axios';

import {
  GetMeQueryResponse,
  GetProductsArgs,
  GetProductsResponse,
  GetProductByIdArgs,
  GetProductByIdResponse,
  // QUERY_TYPE_IMPORTS
} from './auth.types';

export const authQueries = {
  getCurrentUser: (client: AxiosInstance) => async () => {
    return (await client.get<GetMeQueryResponse>(`${BASE_URL}/users/me`)).data;
  },
  getProducts:
    (client: AxiosInstance) =>
    async ({ ...Args }: GetProductsArgs) => {
      const queryArgs = { ...Args };

      if (queryArgs['promo'] === false) {
        delete queryArgs['promo'];
      }

      if (queryArgs['active'] === false) {
        delete queryArgs['active'];
      }

      const queryParams = stringify(queryArgs, { addQueryPrefix: true });
      return await client
        .get<GetProductsResponse>(`${BASE_URL}/products${queryParams}`)
        .then(function (response: { data: GetProductsResponse }) {
          return response.data;
        })
        .catch(function (error) {
          return error;
        });
    },
  getProductById:
    (client: AxiosInstance) =>
    async ({ id }: GetProductByIdArgs) => {
      const queryParams = id;
      return await client
        .get<GetProductByIdResponse>(`${BASE_URL}/products/${queryParams}`)
        .then(function (response: AxiosResponse) {
          return response.data;
        })
        .catch(function (error) {
          return error;
        });
    },
  // QUERY_FUNCTIONS_SETUP
};
