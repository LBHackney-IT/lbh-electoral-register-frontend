# Electoral Register Frontend

This is a web frontend for managing the electoral register for the London Borough of Hackney.

The project is currently at a proof-of-concept stage, with the aim of demonstrating the feasibility of replacing the current Xpress EMS system with a cloud-native system that is able to meet security standards, and avoids licensing fees.

Weeknotes for the project can be found in Google Currents under the tag #ElectionManagementSystem.

## Getting Started

The project uses [Next.js](https://nextjs.org)

It requires Node v14 or greater.

To run locally:

1. Run `npm install` to install dependencies
        
1. Run the app with `npm run dev`. It should be available on [http://dev.hackney.gov.uk:3000](http://dev.hackney.gov.uk:3000)

## Authentication

The app is integrated with [Hackney's Google SSO service](https://github.com/LBHackney-IT/LBH-Google-auth). 
For the production environments, the environment variables specified in `env.sample` should be set appropriately. 
For local running, this can be bypassed by setting the environment variable `BYPASS_AUTHENTICATION=true`. This is already done 
in `env.development.local`, which will be picked up by the dev running command. 

## Deployment

The app requires config values to be set in SSM, which will be read by serverless and set as environment variables for the lambda. The necessary SSM keys can be seen in `serverless.yml`, and a description of the environment variables is in `env.sample`.
