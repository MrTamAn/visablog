class NewController {
    //GET ==>news
    index(req, res) {
        res.render('news');
    }
    slug(req, res) {



        
        res.send('this slug');
    }
}

module.exports = new NewController();
