// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUriApi: 'http://localhost:11805/api/',
  userNetwork:
    'https://{0}/oauth2/authorize?identity_provider={1}&redirect_uri={2}&response_type=TOKEN&client_id={3}&scope=aws.cognito.signin.user.admin openid profile',
  userActiveDirectory:
    'https://{0}/oauth2/authorize?identity_provider={1}&redirect_uri={2}&response_type=token&client_id={3}&scope=aws.cognito.signin.user.admin openid profile',
  cognitoDomain: 'antamina-activebreak-dev.auth.us-east-1.amazoncognito.com',
  identityProvider: 'Antamina',
  identityProviderAzure: 'AzureAD',
  clientUrl: 'http://localhost:64238/Security/Process',
  clientIdAzure: '37es1gmfoo533883vj1iamkp2c',
  clientId: '37es1gmfoo533883vj1iamkp2c',
  urlLogin: 'http://localhost:64238/activebreak/login',  
  bucketSite:'antamina-site-dev',
  bucket: 'activebreak',
  ivEncrypt: 'e84ad660c4721ae0e84ad660c4721ae0',
  passEncrypt: 'insightActiveBreak',
  keyEncrypt: 'insight179ActiveBreak@xy',  
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
