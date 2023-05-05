// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comments
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
    name: String,

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
    // nested comment schema in comment property
    comments: [commentSchema]
    // comments: {
    //     type: Array,
    // }
});

module.exports = [mongoose.model("article", articleSchema), mongoose.model("comment", commentSchema)];
