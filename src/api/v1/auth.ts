import axios from '../instanceAxios';
import { AxiosResponse } from 'axios';

export type requestAuthCheckAccessT = {
  access: boolean;
};

const auth = {
  check: (email: string): Promise<AxiosResponse<requestAuthCheckAccessT>> => {
    return axios({
      url: `v1/auth/check?email=${email}`,
      method: 'post',
      data: {
        email,
      },
    });
  },
};

export default auth;
