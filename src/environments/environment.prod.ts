export const environment = {
  production: true,
  serverUriApi: 'https://dev.antamina.com/activebreakapi/api/',
  userNetwork:
    'https://{0}/oauth2/authorize?identity_provider={1}&redirect_uri={2}&response_type=TOKEN&client_id={3}&scope=aws.cognito.signin.user.admin openid profile',
  userActiveDirectory:
    'https://{0}/oauth2/authorize?identity_provider={1}&redirect_uri={2}&response_type=token&client_id={3}&scope=aws.cognito.signin.user.admin openid profile',
  cognitoDomain: 'antamina-activebreak-dev.auth.us-east-1.amazoncognito.com',
  identityProvider: 'Antamina',
  identityProviderAzure: 'AzureAD',
  clientUrl: 'https://dev.antamina.com/activebreak/Security/Process',
  clientIdAzure: '37es1gmfoo533883vj1iamkp2c',
  clientId: '37es1gmfoo533883vj1iamkp2c',
  urlLogin: 'https://dev.antamina.com/AntaminaDigital/login',
  bucketSite:'antamina-site-dev/',
  bucket: 'ActiveBreak',
  ivEncrypt: 'e84ad660c4721ae0e84ad660c4721ae0',
  passEncrypt: 'insightActiveBreak',
  keyEncrypt: 'insight179ActiveBreak@xy'
};
