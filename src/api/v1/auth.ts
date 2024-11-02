import axios from '../instanceAxios';
import { AxiosResponse } from 'axios';

/** */
export interface GetClientPayloadI {
  email: string;
}
export interface GetClientResponseI {}

/** */
export interface SaveClientPayloadI {
  email: string;
}
export interface SaveClientResponseI {
  access: boolean;
}

/** */
export interface CheckAccessPayloadI {
  email: string;
}
export interface CheckAccessResponseI {}

/**
 * @description ...
 */
const getClient = (
  //TODO: уточнить как это работает
  payload: GetClientPayloadI
): Promise<AxiosResponse<GetClientResponseI>> => {
  const { email } = payload;
  return axios({
    method: 'get',
    url: `v1/client?email=${email}`,
  });
};

/**
 * @description...
 */
const saveClient = (
  payload: SaveClientPayloadI
): Promise<AxiosResponse<SaveClientResponseI>> => {
  const { email } = payload;
  return axios({
    method: 'post',
    url: `v1/client`,
    data: {
      email,
    },
  });
};

/**
 * @description...
 */
const check = (
  payload: CheckAccessPayloadI
): Promise<AxiosResponse<CheckAccessResponseI>> => {
  const { email } = payload;
  return axios({
    method: 'post',
    url: `v1/auth/check?email=${email}`,
    data: {
      email,
    },
  });
};

const auth = {
  getClient,
  saveClient,
  check,
};

export default auth;
