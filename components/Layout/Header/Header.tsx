import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Logo from './Logo';

const HeaderComponent = ({
  serviceName,
}: {
  serviceName: string;
}): React.ReactElement => {
  const { pathname } = useRouter();

  return (
    <header className="lbh-header ">
      <div className="lbh-header__main">
        <div className="lbh-container lbh-header__wrapper">
          <div className="lbh-header__title">
            <a href="/" className="lbh-header__title-link">
              <Logo />
              <span className="lbh-header__logo-text"> Hackney </span>
              <span className="lbh-header__service-name">{serviceName}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
