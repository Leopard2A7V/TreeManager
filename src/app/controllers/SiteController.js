const Node = require('../models/Node');
const {
    mongooseToObject,
    MultipleMongooseToObject,
    MongooseToObject
} = require('../../utils/mongoose');
const {
    multipleMongooseToObject
} = require('../../utils/mongoose');
// const nodemailer = require('nodemailer');
// const hbs = require('nodemailer-express-handlebars');
const path = require('path');

class SiteController {

    //[GET] Home
    index(req, res, next) {
        res.render('home')
    }
    //[GET] API DATA SERVER TO CLIENT SIDE MAPPING
    async api(req, res, next) {

        await Node.find({})
            .then(nodes => {
                var Data = MultipleMongooseToObject(nodes)
                res.json(Data)
                return
            })
            .catch(next)

    }
    //[GET]Search
    async search(req, res, next) {

        Node.findOne({
                Name: req.query.q
            })
            .then(node => {
                res.json(node)
                // console.log(node)
                return
            })
            .catch(next)
    }
}




module.exports = new SiteController