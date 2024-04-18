const Account = require('../model/Account.js')

class AccountController {
    async login(req, res, next) {
        try {
            res.render('account/login')
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    async logout(req, res, next) {
        try {
            res.render('account/login')
        } catch (error) {
            res.json({ error: error.message });
        }
    }

    register (req, res, next) {
        try {
            res.render('account/register')
        } catch (error) {
            res.json({ error: error.message });
        }
    }
}

module.exports = new AccountController