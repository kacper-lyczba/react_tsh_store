import axios from 'axios';

import { requestSuccessInterceptor } from 'context/apiClient/apiClientContextController/interceptors/requestInterceptors';
import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from 'context/apiClient/apiClientContextController/interceptors/responseInterceptors';

export const BASE_URL = 'http://jointshfrontendapi-env-3.eba-z7bd6rn6.eu-west-1.elasticbeanstalk.com';

const axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: BASE_URL,
});

axiosClient.interceptors.request.use(requestSuccessInterceptor);
axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

// eslint-disable-next-line import/no-default-export
export default axiosClient;
