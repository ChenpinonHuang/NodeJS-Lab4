const { new: _new, index, show, create, delete: _delete } = require('../controllers/ProductsController');

module.exports = router => {
    router.get('/products', index);
    router.get('/products/new', _new);
    router.post('/products', create);
    router.get('/products/:id', show);
  };