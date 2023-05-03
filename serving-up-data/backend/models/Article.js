// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const commentSchema = new Schema({
    name: String,

    articleName: {
        type: String,
        required:true,
    },

    datePosted:{
        type: String,
    },

    content:{
        type: String,
    }
})
const articleSchema = new Schema({
    // Simple declaration of datatype that will be used:
    name: String,
    // You can add specifics to each one too that help with validation, like making something required, or unique
    datePublished:{
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    readingTime: {
        type: String,
    },

    blurb: {
        type: String,
    },

    article: {
        type: String,
    },

    comments: [commentSchema]
    // comments: {
    //     type: Array,
    // }
});

module.exports = [mongoose.model("article", articleSchema), mongoose.model("comment", commentSchema)];
