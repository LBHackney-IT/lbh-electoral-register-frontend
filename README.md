# Electoral Register Frontend

This is a web frontend for managing the electoral register for the London Borough of Hackney.

The project is currently at a proof-of-concept stage, with the aim of demonstrating the feasibility of replacing the current Xpress EMS system with a cloud-native system that is able to meet security standards, and avoids licensing fees.

Weeknotes for the project can be found in Google Currents under the tag #ElectionManagementSystem.

## Getting Started

The project uses [Next.js](https://nextjs.org) and Typescript/Javascript.

It requires Node v14 or greater. If you are using nvm to manage Node versions, there is a `.nvmrc` file in the project.

To run locally:

1. Run `npm install` to install dependencies
1. Run the app with `npm run dev`. It should be available on [http://localhost:3000](http://localhost:3000)

### Developer tools

The project uses Prettier for formatting, and ESLint for linting. The CI server will run formatting and linting checks, so you should run the commands `npm run format` and `npm run lint` before pushing. You will probably find plugins for Prettier and ESLint for your chosen editor - installing these might make for a smoother development workflow.

## Authentication

The app is integrated with [Hackney's Google SSO service](https://github.com/LBHackney-IT/LBH-Google-auth).
For the production environments, the environment variables specified in `env.sample` should be set appropriately.
For local running, this can be bypassed by setting the environment variable `BYPASS_AUTHENTICATION=true`. This is already done
in `env.development.local`, which will be picked up by the dev running command.

### Authentication environment values

| Environment variable | Value                                          |
| -------------------- | ---------------------------------------------- |
| GSSO_URL             | https://auth.hackney.gov.uk/auth?redirect_uri= |
| GSSO_TOKEN_NAME      | hackneyToken                                   |

## Deployment

The app is deployed into AWS using the Serverless framework. This deploys the code to a lambda function, using the entry point in `lambda.js`. It also sets up API Gateway and Cloudfront. This is all configured in `serverless.yml`. The serverless deployment is run as part of the [CircleCI pipeline](https://app.circleci.com/pipelines/github/LBHackney-IT/lbh-electoral-register-frontend). The staging version of the app is currently deployed into the ElectoralPOC AWS account (645508685372). In future, this will need to move to a more permanent AWS account. Additionally, a production environment will need to be set up.

The following setup in the AWS account was done prior to initial deployment:

- Set up a VPC with private subnets, and add the vpc and subnet ids to the `custom` section in `serverless.yml`
- Import the Hackney wildcard SSL certificate into ACM in the AWS account, and put the certificate id in `serverless.yml`
- Set up the SSM parameters required by the app. These can be seen in the `environment` section in `serverless.yml`. The environment variables have explanations in `env.sample`. The current values for those dependent on the google auth service are listed in the Authentication Environment Variables section above.

After deployment, and the creation of the Cloudfront distribution, a pull request should be created against [this file](https://github.com/LBHackney-IT/infrastructure/blob/master/platform/public-dns/terraform/zones/uk-gov-hackney/22-cname-records.tf) in the main infrastructure repo to point the correct DNS name towards the app.

## Code structure and roadmap

The code follows a broadly standard structure for a Next.js app. Jest is used for testing. The entry point for the deployed lambda is `lambda.js`.

To help in getting a prototype working quickly, the form components in this project and the associated helper classes were taken from https://github.com/LBHackney-IT/lbh-social-care-frontend, with some modifications made.

### Integrations

See the architecture document for more details. In brief, this frontend is planned to integrate in future with:

- The electoral register API (repo created at https://github.com/LBHackney-IT/electoral-register-api containing the draft API spec, but no code implemented yet)
- The IER wrapper API (not yet created)
- The IER polling lambda (not yet created)

### Open tasks

This is a list of code cleanup/bug fix tasks that weren't completed in the first phase:

- There are some components not yet converted to Typescript.
- The form builder does not persist state between page refreshes, so data is lost going between steps on the form
- The favicon does not display in the staging site
- The static hosting may not be set up correctly in lambda.js (related to the issue above)
- We need to set up a Google group for authentication, and add the JWT secret to the app's config in SSM.
- The use of the pdfjs worker in the PdfViewer is (probably) not production-ready. [This github issue](https://github.com/wojtekmaj/react-pdf/issues/136) might offer some ways forward.

### Next steps

These are the expected next steps in moving this proof-of-concept towards a full app:

- Replace the mocked-out data in the current journeys with calls to API endpoints on the server-side
- Hook those server-side endpoints up to external APIs (See the swagger spec in https://github.com/LBHackney-IT/electoral-register-api for details of the endpoints on that API)
- Review the existing code for consistency with Hackney's overall approach to front-end structure
