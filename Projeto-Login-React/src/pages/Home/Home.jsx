import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Home.css';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="backgroundd">
      <div className="pages-home">
        Bem vindo, ADMIN!!!
      <br />
        <button className="button-logout" type="button" onClick={() => setToken(null)}>
          Sair
      </button>
      </div>
    </div>
  );
};

export default PagesHome;
