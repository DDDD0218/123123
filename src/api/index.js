import http from '../utils/axios';

export const getLoginQrCkey = () => http.get('/login/qr/key');

export default {};
