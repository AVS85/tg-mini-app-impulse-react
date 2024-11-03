import { AxiosResponse } from 'axios';
import axios from '../instanceAxios';

interface PostMessagePayloadI {
  clientId: string;
  analyze_message: string;
}

interface PostMessageResponseT {
  response: string;
}

const post = (
  payload: PostMessagePayloadI
): Promise<AxiosResponse<PostMessageResponseT>> => {
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

const messages = { post };

export default messages;
