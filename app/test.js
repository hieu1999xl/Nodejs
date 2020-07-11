// const mongoose = require('mongoose')
// const BlogPost = require('./models/BlogPost')
// mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true });
// BlogPost.create({
//  title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
//  body: 'Nếu bạn đam mê với Javascript.'
// }, (error, blogpost) => {
//  console.log(error, blogpost)
// })

// BlogPost.find({
//     title: /Node.js/
// },(error, blogpost) =>{
//     console.log(error, blogpost)
// })

// var id = "5e9d5c801f17ee18bc6a2b91";
// BlogPost.findByIdAndUpdate(id,{
//     title: 'updated title done!'
// },(error, blogpost) => {
//     console.log(error,blogpost)
// })
// var id = "5e9d5f84f2948c0c204a85d2";
// BlogPost.findByIdAndDelete(id, (error, blogpost) => {
//     console.log(error, blogpost)
// })