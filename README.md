# proxy-cors

Proxy server that allows CORS and invalid certificates.
Should only be used for local network stuff and development!

## Installing

You need Node installed on your machine.

To start the proxy run:

```sh
$ npm install
$ PROXY_URL=localhost:3000 npm start
```

By default it will create a proxy server that will listen on localhost:4000.
You can also specify the proxy server's port by setting:

```sh
$ PORT=8080 PROXY_URL=localhost:3000 npm start
```
