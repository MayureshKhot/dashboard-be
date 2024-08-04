// authService.js
export const isAuthenticated = () => {
    // Implement your authentication logic here, e.g., checking a token in localStorage
    return localStorage.getItem('token') !== null;
};
  
  export const login = (token) => {
    localStorage.setItem('token', token);
  };
  
  export const logout = () => {
    localStorage.removeItem('token');
  };