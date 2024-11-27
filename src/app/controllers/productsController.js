class ProductsController {
    index(req, res) {
        res.render('product');
    }
}

module.exports = new ProductsController();
