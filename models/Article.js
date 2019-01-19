var mongoose = require("mongoose")

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        unique: false
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note",
        unique: false
    },
    topic: {
        type: String,
        required: true,
        unique: false
        
    },
    image: {
        type: String,
        unique: false
    }
});


var Article = mongoose.model("Article",ArticleSchema);



module.exports = Article;