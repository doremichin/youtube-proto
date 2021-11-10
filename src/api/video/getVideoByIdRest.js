import axios from 'axios';

import { BASE_API_URL } from '../../const/config';

export const getVideoByIdRest = async (params) => {
  try {
    const { data } = await axios({
      baseURL: BASE_API_URL,
      url: '/videos',
      method: 'get',
      params,
    });
    return data;
  } catch (err) {
    return err;
  }
};
