const homeRoutes = require('./home')
const purchaseRoute = require('./purchase')
const SearchRoute = require('./search')


function route(app) {
    app.use('/purchase', purchaseRoute);
    app.use('/search', SearchRoute);
    app.use('/', homeRoutes);
}

module.exports = route