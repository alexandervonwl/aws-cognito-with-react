import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-central-1_C4GL3pr8c',
  ClientId: '3i4f4056k52q0h8ns3tb3rj7be',
};

export default new CognitoUserPool(poolData);
