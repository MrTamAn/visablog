class UserController {
    index(req, res) {
        res.render('users/user', { showHeader: true, showFooter: true });
    }
}

module.exports = new UserController();
