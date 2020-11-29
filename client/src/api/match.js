import { get } from "@/utils/fetch";
const ENDPOINT = "/api/match";
const fetchMatch = (id) => () => get({ url: `${ENDPOINT}/${id}` });
export { fetchMatch };
