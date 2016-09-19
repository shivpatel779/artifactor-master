var router = require('koa-router')();
var routesfactory = require('./entity/routes-factory')

const item = require('./entity/item');
const list = require('./entity/list');
routesfactory.create('components')
// router.get('/components/:id', async function (ctx, next) {
//   await item(ctx);
//   await ctx.render('index');
//   next();
// })

router.get('/:id', item)
router.get('/', function *(next) {
  
  })
 //router.get('/', list)
module.exports = router;
