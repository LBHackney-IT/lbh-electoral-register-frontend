/// <reference types="next" />
/// <reference types="next/types/global" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GSSO_TOKEN_NAME: string;
      HACKNEY_JWT_SECRET: string;
      AUTHORISED_GROUP: string;
    }
  }

  interface Window {
    GOVUKFrontend: {
      initAll: () => void;
    };
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
