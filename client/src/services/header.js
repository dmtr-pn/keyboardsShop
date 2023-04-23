export default function authHeader() {
    let token = localStorage.getItem('user_token');
  
    if (token) {
      return { 'x-access-token': token };
    } else {
      return {};
    }
}