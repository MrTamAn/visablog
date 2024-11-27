class UserController {
    index(req, res) {
        res.render('users');
    }
}

module.exports = new UserController();
