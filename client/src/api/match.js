import { get } from "@/utils/fetch";
const ENDPOINT = "/api/match";
const getMatchById = (id) => () => get({ url: `${ENDPOINT}/${id}` });
export { getMatchById };
