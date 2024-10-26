import axios from '../instanceAxios';
import { URL_ANALYZE_CONFLICT } from '../routes';

interface ConflictSendMessagePayloadT {
  userId: string;
  conflict: string;
}

interface ConflictSendMessageResponseT {
  response: string;
}

const conflict = {
  sendMessage: (data: ConflictSendMessagePayloadT) => {
    return axios.post<ConflictSendMessageResponseT>(URL_ANALYZE_CONFLICT, data);
  },
};

export default conflict;
