var router = require('koa-router')();
var routesfactory = require('./entity/routes-factory')

const item = require('./entity/item');
const list = require('./entity/list');

routesfactory.create('addons')
// router.get('/components/:id', async function (ctx, next) {
//   await item(ctx);
//   await ctx.render('index');
//   next();
// })

router.get('/:id', item)
//router.get('/', list)

 router.get('/', function *(next) {
   list('components')
  })
module.exports = router;

