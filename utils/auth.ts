import cookie from 'cookie';
import jsonwebtoken from 'jsonwebtoken';

import type { NextPageContext } from 'next';
import type { User } from 'types';

export const AUTH_WHITELIST = ['/login', '/access-denied'];

const { GSSO_TOKEN_NAME } = process.env;

export const deleteSession = (
  res: NonNullable<NextPageContext['res']>
): void => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(GSSO_TOKEN_NAME, '', {
      maxAge: -1,
      domain: '.hackney.gov.uk',
    })
  );
  res.writeHead(302, {
    Location: '/login',
  });
  res.end();
};

export const shouldRedirect = (
  pathname: string,
  user?: Partial<User>
): string | undefined => {
  const isPathWhitelisted = AUTH_WHITELIST.includes(pathname);
  if (!isPathWhitelisted) {
    if (!user) {
      return '/login';
    }
    if (!user?.isAuthorised) {
      return '/access-denied';
    }
  }
  if (isPathWhitelisted && user?.isAuthorised) {
    return '/';
  }
};

interface ParsedCookie {
  name: string;
  email: string;
  groups: string[];
}

export const isAuthorised = (
  req: NonNullable<NextPageContext['req']>
): User | undefined => {
  if (process.env.BYPASS_AUTHENTICATION === 'true') {
    return {
      isAuthorised: true,
      name: 'Development User',
      email: 'test@example.com',
    };
  }

  const { HACKNEY_JWT_SECRET, AUTHORISED_GROUP } = process.env;
  const cookies = cookie.parse(req.headers.cookie ?? '');
  const parsedToken = cookies[GSSO_TOKEN_NAME]
    ? (jsonwebtoken.verify(
        cookies[GSSO_TOKEN_NAME],
        HACKNEY_JWT_SECRET
      ) as ParsedCookie)
    : null;
  if (!parsedToken) {
    return;
  }
  const { groups = [], name, email } = parsedToken;

  return {
    isAuthorised: groups.includes(AUTHORISED_GROUP),
    name,
    email,
  };
};
