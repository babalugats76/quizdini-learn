import { post } from "@/utils/fetch";
const ENDPOINT = "/api/ping";
const postPing = (data) => post({ url: `${ENDPOINT}`, data });
export { postPing };
