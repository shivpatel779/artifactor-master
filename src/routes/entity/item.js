const adapters = require('./adapters')


// TODO: wrap using class or higher order function!
// Avoid duplication!!!
module.exports = async function (ctx, next) {

  console.log('entering item route');
  
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  const entity = ctx.params.entity;
  const id = ctx.params.id;

  const artifactor = adapters.io.adapt(entity, id);

  ctx.type = 'json';
  const jsonBody = await artifactor.item();
  ctx.body = jsonBody;
}