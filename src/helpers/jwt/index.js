/*
 * retrieves JWT token from cookie named 'jwt_token' and returns it's value
 */

export const getJwtToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`jwt_token=`);
  const token = parts.length === 2 ? parts.pop().split(";").shift() : null;

  return token;
};

/*
 * set new cookie named  'jwt_token' and also append
 * Authentication: Bearer {token} header to our axios instance
 */
export const setJwtToken = (token, expires_in, time = 1000) => {
  let expires = new Date();
  expires.setTime(expires.getTime() + expires_in * time);
  document.cookie = `jwt_token=${token}; expires=${expires.toUTCString()}; path=/`;

  localStorage.setItem("jwt", token);
};

export const deleteJwtToken = (name, path, domain) => {
  document.cookie =
    name +
    "=" +
    (path ? ";path=" + path : "") +
    (domain ? ";domain=" + domain : "") +
    ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
  localStorage.removeItem("jwt");
};
