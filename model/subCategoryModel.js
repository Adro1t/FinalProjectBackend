const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const subcategorySchema = new mongoose.Schema({

    sub_category_name: {
        type: String,
        required: true,
        trim: true,
    },

    category:{
        type:ObjectId,
        required:true,
        ref:'Category'
    }

}, { timestamps: true })

module.exports = mongoose.model('SubCategory', subcategorySchema)