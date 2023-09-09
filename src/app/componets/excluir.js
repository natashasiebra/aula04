import React from 'react';
import Cookies from 'js-cookie';

function RemoverCookie() {
  const removerCookie = () => {
    Cookies.remove('token');
  };

  return (
    <button onClick={removerCookie()}>Remover Cookie</button>
  );
}

export default RemoverCookie;
