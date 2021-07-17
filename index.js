const fetch = require('node-fetch');

// Common usages, Ref: https://github.com/node-fetch/node-fetch
// Plain text or HTML
// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));

// JSON
fetch('https://api.github.com/users/github')
  .then(res => res.json())
  .then(json => console.log(json));

// Simple Post
// fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' })
//     .then(res => res.json()) // expecting a json response
//     .then(json => console.log(json));

// Post with JSON
// const body = { a: 1 };
 
// fetch('https://httpbin.org/post', {
//         method: 'post',
//         body:    JSON.stringify(body),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));

// Post with params 
// const { URLSearchParams } = require('url');
 
// const params = new URLSearchParams();
// params.append('a', 1);
 
// fetch('https://httpbin.org/post', { method: 'POST', body: params })
//     .then(res => res.json())
//     .then(json => console.log(json));