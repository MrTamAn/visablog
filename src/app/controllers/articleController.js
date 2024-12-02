const Article = require('../models/articleModel');
const { multipleToObj } = require('../../util/mongoose');

class ArticleController {
  async index(req, res, next) {
    Article.find()
      .then(articles => {
        // articles = articles.map((article) => article.toObject());
        res.render('article/article', {
          articles: multipleToObj(articles)
        });
      })

      .catch(next);
  }
  create(req, res) {
    res.render('article/create', {
      showHeader: true,
      showFooter: true
    });
  }
  store1(req, res) {
    res.render('article/store');
  }
  //GET article/store
  store(req, res) {
    const { selectedOptions } = req.body;

    console.log('Received options:', selectedOptions);

    // Phản hồi lại client
    res.json({
      message: 'Data received successfully!',
      receivedData: selectedOptions
    });
  }
}

module.exports = new ArticleController();
