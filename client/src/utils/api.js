import axios from 'axios';

/* Include custom header containing client's current tz */
axios.defaults.headers.common[
  'quizdini-timezone'
] = Intl.DateTimeFormat().resolvedOptions().timeZone;

/* Set "global" settings that can be overwritten (by arg) */
const AXIOS_CONFIG = { timeout: 30000 };

/***
 * Calls GET method of url using axios
 * @returns {object} data or error object (from server)
 */
export const get = async (url, config = AXIOS_CONFIG) => {
  console.log('url', url);
  try {
    const res = await axios.get(url, config);
    return { data: res.data };
  } catch (err) {
    return {
      error: err.response.data,
    };
  }
};
