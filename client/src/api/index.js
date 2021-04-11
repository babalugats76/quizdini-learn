import { get, post } from "@utils/fetch";

const MATCHES_ENDPOINT = "/api/matches";
const PINGS_ENDPOINT = "/api/pings";

const getMatch = (matchId) => () => get({ url: `${MATCHES_ENDPOINT}/${matchId}` });
const postPing = (data) => post({ url: `${PINGS_ENDPOINT}`, data });

export { getMatch, postPing };
