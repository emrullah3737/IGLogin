# Instagram Login

    $ git clone https://github.com/emrullah3737/IGLogin.git
    $ npm install
    $ node app


# Init ``(app.js)``
```javascript
const IGLogin = require('instagramlogin');

const config = {
port: 8080,
clientId: 'client-id',// for instagram config
clientSecret: 'client-secret',// for instagram config
redirectUrl: 'http://127.0.0.1:8080/callback/',// for instagram config
callbackUrl: '/callback/',// for router
loginUrl: '/login'// for router
};
const igLogin = new IGLogin(config);
```

# Response

    data: Instagram user profile (with token)
    format: JSON format
    exp: {"id":"id","username":"user","profile_picture":"https://scontent.cdninstagram.com/rand.jpg","full_name":"full name","bio":"bio","website":"http://www.example.com/","is_business":false}