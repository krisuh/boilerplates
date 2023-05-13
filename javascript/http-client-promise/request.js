// Very simple 'async' http request function. Not pretty.
// const http = require('http');
const http = require('https');
const qs = require('querystring');

const defaultHeaders = {
  'Content-Type': 'application/json',
};

async function request(
  url,
  method = 'GET',
  path = '',
  options = {},
  postBody = {},
  headers = {},
  encoding = 'utf8',
) {
  const requestHeaders = { ...defaultHeaders, ...headers };
  const requestOptions = {
    hostname: url,
    method,
    path,
    headers: requestHeaders,
  };
  return new Promise((resolve, reject) => {
    const req = http.request(requestOptions, (response) => {
      response.setEncoding(encoding);
      let responseBody = '';
      response.on('data', (chunk) => {
        responseBody += chunk;
      });
      response.on('end', () => {
        const result = {
          status: response.statusCode,
          body: responseBody,
        };
        resolve(result);
      });
    });
    if (method === 'POST' || method === 'PUT') {
      const postStr = getPostBodyAsString(
        postBody,
        requestHeaders['Content-Type'],
      );
      requestOptions.headers = {
        ...requestOptions.headers,
        'Content-Length': Buffer.byteLength(postStr),
      };
      req.write(postStr);
    }
    req.on('error', (error) => reject(error));
    req.end();
  });
}

function getPostBodyAsString(postBody, contentType) {
  switch (contentType) {
    case 'application/x-www-form-urlencoded':
      return qs.stringify(postBody);
    default:
      return JSON.stringify(postBody);
  }
}

module.exports = {
  request,
};
