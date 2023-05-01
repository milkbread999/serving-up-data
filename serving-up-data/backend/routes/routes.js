const express = require('express')
const router = express.Router()
const articleSchema = require('../models/Article.js')

router.get('/', (req, res) => {
    articleSchema.find({
    })
    //'then' happens if find is succesful
    .then(articles => {
      console.log("succesfully got entire db!")
      console.log(articles)
      res.json(articles)
    })
    //if theres an error, 'catch' happens instead
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
    })
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
    // TODO:
    // Update:
    // Update a Model using our articleSchema Model
    // https://mongoosejs.com/docs/api/model.html
    // which of the methods in the link above ^ could be useful?

    // be sure to add a .then() and .catch() after
})

//TODO: change '/' below to be by id
router.delete('/removexo', (req, res) => {
  articleSchema.findOneAndDelete(req.body)
  .then(article => {
    console.log("succesfully deleted new guy!")
    console.log(article)
    res.json(article)
  })
  .catch(err => {
    console.error(err)
    console.log('THIS ERROR IS UGLIER THAN UR RECEDING HAIRLINE <3333')
  })
    // TODO:
    // Delete:
    // Delete a Model using our articleSchema Model
    // https://mongoosejs.com/docs/api/model.html
    // which of the methods in the link above ^ could be useful?

    // be sure to add a .then() and .catch() after
})

module.exports = router