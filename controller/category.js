const Category = require('../model/categoryModel')

exports.postCategory = (req, res) => {
    let category = new Category(req.body)

    category.save((err, category) => {
        if (err || !category) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.json({ category })
    })
}

exports.getAllCategory = (req, res) => {
    Category.find().exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.json(category)
    })
}

exports.CategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        req.category = category
        next()
    })
}

exports.getsingleCategory = (req, res) => {
    return res.json(req.category)
}

exports.deleteCategory = (req, res) => {
    const category = req.category
    category.remove((err, result) => {
        if (err || !result) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.json({ message: "Category deleted" })
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category
    category.category_name = req.body.category_name
    category.save((err, category) => {
        if (err || !category) {
            return res.status(400).json({ error: "Failed to update category" })
        }
        res.json({ category })
    })
}