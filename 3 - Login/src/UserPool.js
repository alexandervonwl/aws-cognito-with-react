import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-central-1_k0ZWmVRSS',
  ClientId: '278i8k449n4tb189n1mvuh92s6',
};

export default new CognitoUserPool(poolData);
