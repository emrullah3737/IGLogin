const IGLogin = require('./login');

const config = {
  port: 8080,
  clientId: '5805b54ce69a4233af137070bf3e3971',// for instagram config
  clientSecret: '494ed76448804990a3213dd848ce0f92',// for instagram config
  redirectUrl: 'http://127.0.0.1:8080/callback/',// for instagram config
  callbackUrl: '/callback/',// for router
  loginUrl: '/login'// for router
};
const igLogin = new IGLogin(config);