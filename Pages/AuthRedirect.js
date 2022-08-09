import React, { useEffect } from 'react';

const AuthRedirect = () => {
  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length >= 2) return parts.pop().split(';').shift();
  }

  useEffect(() => {
    // Get cookies and set them on LocalStorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: getCookie('username'),
        token: getCookie('token'),
      })
    );

    // Remove cookies after they are set in the LocalStorage
    document.cookie = 'username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

    setTimeout(() => {
      window.location.replace('/');
    }, 4000);
  });
  return <div>AuthRedirect</div>;
};

export default AuthRedirect;
