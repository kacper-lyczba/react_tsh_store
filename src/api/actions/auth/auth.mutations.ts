import { AxiosInstance, AxiosResponse } from 'axios';

import {
  LoginMutationArguments,
  LoginMutationResponse,
  // MUTATION_TYPE_IMPORTS
} from './auth.types';

export const authMutations = {
  loginMutation: (client: AxiosInstance) => async (body: LoginMutationArguments) => {
    await client
      .post<LoginMutationResponse>('/users/login', body)
      .then(function (response: AxiosResponse) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  },
  // MUTATION_FUNCTIONS_SETUP
};
