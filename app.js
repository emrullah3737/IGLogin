const express = require('express');
const request = require('request');

const app = express();

module.exports = class IGLogin{
  constructor({ port, clientId, clientSecret, redirectUrl, callbackUrl, loginUrl }) {
    this.port = port;
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.redirectUrl = redirectUrl;
    this.url =`https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`;
    this.routing(loginUrl, callbackUrl);
    this.listen(port);
  }

  routing(loginUrl, callbackUrl) {
    app.get(loginUrl, (req, res) => {
      res.redirect(this.url);
    });

    app.get(callbackUrl, (req, res) => {
      const code = req.query.code;
      const form = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: this.redirectUrl,
        code
      };
      this.getProfile(form, (error, response, body) => {
        if(error) return res.json({ error });
        this.setData(body);
        res.json(this.getUser());
      });
    });
  }

  setData(body) {
    const profile = JSON.parse(body);
    this.user = profile.user;
    this.accessToken = profile.access_token;
  }

  getToken() {
    return this.accessToken;
  }

  getUser() {
    return this.user;
  }

  getProfile(form, cb) {
    request({
      method: 'POST',
      url: 'https://api.instagram.com/oauth/access_token',
      form,
    }, cb);
  }

  listen(port) {
    app.listen(port, () => {
      console.log(port, 'listening');
    });
  }
}