import { AxiosResponse } from 'axios';
import axios from '../instanceAxios';

interface PostMessagePayloadI {
  clientId: string;
  question: string;
}

interface PostMessageResponseT {
  response: string;
}

const post = (
  payload: PostMessagePayloadI
): Promise<AxiosResponse<PostMessageResponseT>> => {
  return axios({
    method: 'post',
    url: `v1/ask-question`,
    data: {
      ...payload,
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

const chat = { post };

export default chat;
