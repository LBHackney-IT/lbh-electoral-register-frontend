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

### Authentication environment values

| Environment variable | Value                                          |
| -------------------- | ---------------------------------------------- |
| GSSO_URL             | https://auth.hackney.gov.uk/auth?redirect_uri= |
| GSSO_TOKEN_NAME      | hackneyToken                                   |

## Deployment

The app is deployed into AWS using the Serverless framework. This deploys the code to a lambda function, using the entry point in `lambda.js`. It also sets up API Gateway and Cloudfront. This is all configured in `serverless.yml`. The serverless deployment is run as part of the CircleCI pipeline. The staging version of the app is currently deployed into the ElectoralPOC AWS account (645508685372). In future, this will need to move to a more permanent AWS account. Additionally, a production environment will need to be set up.

The following setup in the AWS account was done prior to initial deployment:

- Set up a VPC with private subnets, and add the vpc and subnet ids to the `custom` section in `serverless.yml`
- Import the Hackney wildcard SSL certificate into ACM in the AWS account, and put the certificate id in `serverless.yml`
- Set up the SSM parameters required by the app. These can be seen in the `environment` section in `serverless.yml`. The environment variables have explanations in `env.sample`. The current values for those dependent on the google auth service are listed in the Authentication Environment Variables section above.

After deployment, and the creation of the Cloudfront distribution, a pull request should be created against [this file](https://github.com/LBHackney-IT/infrastructure/blob/master/platform/public-dns/terraform/zones/uk-gov-hackney/22-cname-records.tf) in the main infrastructure repo to point the correct DNS name towards the app.
