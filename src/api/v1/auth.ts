import axios from '../instanceAxios';
import { AxiosResponse } from 'axios';
import {
  GetClientPayloadI,
  GetClientResponseI,
  SaveClientPayloadI,
  SaveClientResponseI,
  CheckAccessPayloadI,
  CheckAccessResponseI,
  AddAuthPayloadI,
  AddAuthResponseI,
} from '@/types/api';

/**
 * @description сохранение email
 */
const clientSave = (
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
 * @description получение данных клиента, сохраненного в базе
 */
const clientGet = (
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
 * @description добавление clientId в .... ???
 */

const authAdd = (
  payload: AddAuthPayloadI
): Promise<AxiosResponse<AddAuthResponseI>> => {
  const { clientId } = payload;
  return axios({
    method: 'post',
    url: `v1/auth`,
    data: {
      clientId,
    },
  });
};

/**
 * @description проверка доступа клиента к приложению
 */
const authCheck = (
  payload: CheckAccessPayloadI
): Promise<AxiosResponse<CheckAccessResponseI>> => {
  const { email } = payload;
  return axios({
    method: 'post',
    url: `v1/auth/check`,
    data: {
      email,
    },
  });
};

const auth = {
  clientSave,
  clientGet,
  authAdd,
  authCheck,
};

export default auth;
