import Axios from 'axios';

import { serverUrl } from '../../.env/resources';

const httpClient = Axios.create({
  withCredentials: true
});

function useFetchRecords() {
  return httpClient
    .get(`http://${serverUrl}/member/records`)
    .then(({ data }) => data)
    .catch((e) => {
      throw e;
    });
}

export default useFetchRecords;