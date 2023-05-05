const express = require('express')
const router = express.Router()
const [articleSchema, commentSchema] = require('../models/Article.js')

// get articles w/ comments
router.get('/', (req, res) => {
    articleSchema.find({
    })
    //'then' happens if find is succesful
    .populate('comments') // populate the comments field
    .then(articles => {
      console.log("succesfully got entire db!")
      console.log(articles)
      res.json(articles)
    }) 
    // if there's an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
    })
})

//Read/get by id
router.get('/:id', (req, res) => {
    articleSchema.findById(req.params.id)
    .then(article => {
      console.log("succesfully got one!")
      console.log(article)
      res.json(article)
    })
    .catch(err => {
      console.error(err)
    })
})


//we will be using the '/add' to do a POST request
router.post('/add', (req, res) => {
    articleSchema.create(req.body)


    .then(article => {
      console.log("succesfully added name!")
      console.log(article)
      res.json(article)
    })
    .catch(err => {
      console.error(err)
      console.log('POST ERROR')
      res.send(err)

    })
})
// add comment w/ article name in params
router.post('/addcomment/:articleName', (req, res) => {
  // init schema
  commentSchema.create(req.body)
  //find article w/ articleName parameter
  .then(comment=>{
    articleSchema.findOne({name: req.params.articleName})
    // put comment in article & save
    .then(article =>{
      console.log(article)
      article.comments.push(comment)
      article.save()
      .then(updatedArticle=>{
        res.send(updatedArticle)
      })

      
    })
  }) .catch(err => {
        console.error(err)
        console.log('POST ERROR')
        res.send(err)
      })
  

  // .then(article =>{
    
  //     .then(comment => {
  //     articleSchema.findOneAndUpdate(
  //       {comments: (comment)}
  //     )
  //     console.log("succesfully added name!")
  //     console.log(comment)
  //     console.log(article)
  //     res.send(comment)

  //     article.comments.push(comment)
 
      
  //   })
  //   .catch(err => {
  //     console.error(err)
  //     console.log('POST ERROR')
  //     res.send(err)
  //   })

  // })
  // TODO:
  // Create:
  // Create a Model using our articleSchema Model
  // https://mongoosejs.com/docs/api/model.html#model_Model.create

  // be sure to add a .then() and .catch() after
})

//TODO: change '/' below to be by id
router.put('/put', (req, res) => {
  articleSchema.findOneAndUpdate({name: "newdude"}, {name: 'newname', email: 'NEWDUDE@gmail.com', role: "student"})
  .then(article => {
    console.log("succesfully added name!")
    console.log(article)
    res.json(article)
  })
  .catch(err => {
    console.error(err)
    console.log('PUT ERROR')
  })
})

//TODO: change '/' below to be by id
router.delete('/removearticle', (req, res) => {
  articleSchema.findOneAndDelete(req.body)
  .then(article => {
    console.log("succesfully deleted!")
    console.log(article)
    res.json(article)
  })
  .catch(err => {
    console.error(err)
  })
})

module.exports = router