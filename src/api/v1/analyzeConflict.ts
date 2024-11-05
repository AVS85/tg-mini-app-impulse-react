import { AxiosResponse } from 'axios';
import axios from '../instanceAxios';

interface PostConflictPayloadI {
  clientId: string;
  conflict: string;
}

interface PostConflictResponseT {
  response: string;
}

const post = (
  payload: PostConflictPayloadI
): Promise<AxiosResponse<PostConflictResponseT>> => {
  return axios({
    method: 'post',
    url: `v1/conflict`,
    data: {
      ...payload,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

const conflict = { post };

export default conflict;
