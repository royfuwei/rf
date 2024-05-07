import axios from 'axios';

const lineNotifyPaths = {
  oauthToken: '/oauth/token',
  oauthAuthorize: '/oauth/authorize',
  notify: '/api/notify',
  status: '/api/status',
  revoke: '/api/revoke',
};

/* Authentication bot */
const notifyBotAxios = (path: string, headers: any) => {
  const url = new URL('https://notify-bot.line.me');
  url.pathname = path;
  return axios.create({
    baseURL: url.toString(),
    headers,
  });
};

const getOauthToken = async (
  code: string,
  redirectUri: string,
  clientId: string,
  clientSecret: string,
) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const request = notifyBotAxios(lineNotifyPaths.oauthToken, headers);
  return request.post('', {
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret,
  });
};

/* Notification api */

const notifyApiAxios = (path: string, token: string, headers: any = {}) => {
  const url = new URL('https://notify-api.line.me');
  url.pathname = path;
  headers['Authorization'] = `Bearer ${token}`;
  return axios.create({
    baseURL: url.toString(),
    headers,
  });
};

const lineNotifyHelper = {
  notifyBotAxios,
  notifyApiAxios,
  getOauthToken,
  lineNotifyPaths,
};

export default lineNotifyHelper;
