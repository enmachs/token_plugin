
var token = '';
var newToken = '';
var client = '';
var uid = '';
module.exports.responseHooks = [
  context => {
    newToken = context.response.getHeader('access-token');
    if (newToken.length != 1 || newToken == null){
      token = context.response.getHeader('access-token');
    }
    // console.log(typeof(context.response.getHeader('access-token')));
    // console.log(context.response.getHeader('access-token').length);
    client = context.response.getHeader('client');
    uid = context.response.getHeader('uid');
    console.log(`Token: ${token}`);
    console.log(`Client: ${client}`);
    console.log(`Uid: ${uid}`);
  }
];

module.exports.requestHooks = [
  context => {
    context.request.setHeader('access-token', token);
    context.request.setHeader('client', client);
    context.request.setHeader('uid', uid);
  }
];
