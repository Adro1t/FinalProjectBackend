const SubCategory = require('../model/subCategoryModel')

exports.postSubCategory = (req, res) => {
    let subcategory = new SubCategory({
        sub_category_name: req.body.sub_category_name,
        category: req.body.category
    })
    subcategory.save((err, subcategory) => {
        if (err || !subcategory) {
            return res.status(400).json({ error: err })
        }
        res.json({ subcategory })
    })
}

exports.subcategorylist = (req, res) => {
    SubCategory.find().exec((err, subcategory) => {
        if (err || !subcategory) {
            return res.status(400).json({ error: "subcategory not found" })
        }
        res.json({ subcategory })
    })
}


exports.SubcategoryById = (req, res, next, id) => {
    SubCategory.findById(id).exec((error, subcategory) => {
        if (error || !subcategory) {
            return res.status(400).json({ error: "Sub category not found" })
        }
        req.subcategory = subcategory
        next()
    })
}

exports.singlesubcategory = (req, res) => {
    res.json(req.subcategory)
}

exports.deleteSubCategory = (req, res) => {
    const subcategory = req.subcategory
    subcategory.remove((err, result) => {
        if (err || !result) {
            return res.status(400).json({ error: "failed to delete subcategory" })
        }
        res.json({ messsage: "Sub Category deleted" })
    })
}

exports.updateSubCategory = (req, res) => {
    let subcategory = req.subcategory
    subcategory.sub_category_name = req.body.sub_category_name
    subcategory.category = req.body.category

    subcategory.save((err, result) => {
        if (err || !result) {
            return res.status(400).json({ error: "failed to update subcategory" })
        }
        res.json({ subcategory })
    })
}