import { get } from "@/utils/api";

const ENDPOINT = "/api/match";

export default {
  fetch: (id) => get({ url: `${ENDPOINT}/${id}` }),
};