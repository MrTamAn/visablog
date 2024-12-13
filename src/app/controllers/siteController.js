class SiteController {
    index(req, res) {
        res.render('sitePage/home', { showHeader: true, showFooter: true });
    }
}

module.exports = new SiteController();
