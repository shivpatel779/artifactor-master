const adapters = require('./adapters')
//require('./routes-factory')
// TODO: wrap using class or higher order function!
// Avoid duplication!!!

class EntityRoute {
  constructor(entity) {

  }
  // Do we accept the request?
  accept(ctx) { }

  // Extract from params and query string
  extract(ctx) { }
  
  // Use adapter
  adapt(ctx) {
    return this.adapter().adapt();
  }
}
class ListRoute extends EntityRoute {

  constructor(entity) {
    super(entity)
  }

  route(entity,ctx, next) { 

  // switch (ctx.accepts('json', 'html')) {
  //   case 'json':
  //     break;
  //   case 'html': 
  //     break;
  //   default: ctx.throw(406, 'json or html only');
  // }

  // // const entity = ctx.params.entity || 'components';
  // const artifactor = adapters.io.adapt(entity);

  // ctx.type = 'json';
  // const jsonBody =  artifactor.list();
  // ctx.body = jsonBody;

    //See routes/entity/list.js 

   //  if(!this.accept(ctx))
   //  {
   //    this.error();
   //  this.extract(ctx);
   //  this.adapt(ctx);
   //   this.response(ctx);
   // }
 }
}


module.exports = ListRoute;

// module.exports = async function (ctx, next) {
//   switch (ctx.accepts('json', 'html')) {
//     case 'json':
//       break;
//     case 'html': 
//       break;
//     default: ctx.throw(406, 'json or html only');
//   }

//   const entity = ctx.params.entity || 'components';
//   const artifactor = adapters.io.adapt(entity);

//   ctx.type = 'json';
//   const jsonBody = await artifactor.list();
//   ctx.body = jsonBody;
// }