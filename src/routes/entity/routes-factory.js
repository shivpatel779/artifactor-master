// Usage:
//  createRouter('components')

const Router = require('koa-router');
var ListRoute = require('./list');

// var list = require('./list')

class RouterFactory {
  constructor(entity,ctx) {
    this.entity = entity;
  }

  list() {
    new ListRoute(this.entity)
  }
  get create() {
    return async function (ctx, next) {
      ctx.body = `POST/create ${entity} is not yet supported!`;  
    }
  }

  get rate() {
    return async function (ctx, next) {
      ctx.body = `POST/create ${entity} is not yet supported!`;  
    }
  }

  get remove() {
    return async function (ctx, next) {
      ctx.body = `DELETE ${entity} is not yet supported!`;  
    }
  }

  get update() {
    return async function (ctx, next) {
      ctx.body = `PUT/update ${entity} is not yet supported!`;  
    }
  }

  get list() {
    return async function (ctx, next) {
      ctx.body = `GET/list ${entity} is not yet supported!`;  
    }
  }

  get item() {
    return async function (ctx, next) {
      ctx.body = `GET/list ${entity} is not yet supported!`;  
    }
  }

  get version() {
    return async (ctx, next) => {
      ctx.body = `GET/list ${entity} is not yet supported!`;  
    }
  }

  createRouter() {
    const router = new Router({
      prefix: `/${this.entity}`
    });

    router
      .get('list', '/', this.list)
      .get('item', '/:id', this.item)
      .get('version', '/:id/version', this.version)            
      .post('create', '/:id', this.create)
      .post('rate', '/:id/rate', this.rate)
      .put('update','/:id', this.update)
      .del('delete', '/:id', this.remove);

    return router;
  }
} 

module.exports = {
  Factory: RouterFactory, 
  create: function(entity) {
    var obj = new RouterFactory(entity);
    obj.list()
    return obj.createRouter();

   
  }
}
