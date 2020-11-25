import axios from "axios";

/* Include custom header containing client's current tz */
axios.defaults.headers.common[
  "quizdini-timezone"
] = Intl.DateTimeFormat().resolvedOptions().timeZone;

/* Set "global" settings that can be overwritten (by arg) */
const AXIOS_CONFIG = { timeout: 30000 };

/***
 * Calls GET method of url using axios
 *
 * @param {string} url     server URL used in request
 * @param {object} config  options used in request
 * @returns {object}       data or error object (from server)
 */
export const get = async ({ url, config = AXIOS_CONFIG }) => {
  console.log("url", url);
  console.log("config", config);
  try {
    const res = await axios.get(url, config);
    return { data: res.data };
  } catch (err) {
    return {
      error: err.response.data,
    };
  }
};

/***
 * Calls POST method of url using axios
 *
 * @param {string} url     server URL used in request
 * @param {object} data    body of the request
 * @param {object} config  options used in request
 * @returns {object}       data or error object (from server)
 */
export const post = async ({ url, data, config = AXIOS_CONFIG }) => {
  console.log("url", url);
  console.log(JSON.stringify(data, null, 4));
  console.log("config", config);
  try {
    const res = await axios.post(url, data, config);
    return { data: res.data };
  } catch (err) {
    return {
      error: err.response.data,
    };
  }
};
