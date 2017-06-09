const IGLogin = require('./login');

const config = {
  port: 8080,
  clientId: 'client-id',// for instagram config
  clientSecret: 'client-secret',// for instagram config
  redirectUrl: 'http://127.0.0.1:8080/callback/',// for instagram config
  callbackUrl: '/callback/',// for router
  loginUrl: '/login'// for router
};
const igLogin = new IGLogin(config);