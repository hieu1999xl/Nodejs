const BlogPost = require('../models/BlogPost.js')
const path = require('path')
module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '...', '/public/uplodad', image.name), function(error){
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name 
        }, function(err){
            res.redirect('/')
        })
    })
}