import client from "./client";

// 로그인
export const login = ({loginId, loginPw}) =>
    client.post('/api/auth/login', {loginId, loginPw});

// 회원가입
export const register = ({loginId, loginPw}) =>
    client.post('/api/auth/register', {loginId, loginPw});

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');