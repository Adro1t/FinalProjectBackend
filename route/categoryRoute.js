const express = require('express')
const { postCategory, getAllCategory, CategoryById, getsingleCategory, deleteCategory, updateCategory } = require("../controller/category")

const router = express.Router()

router.post('/postcategory', postCategory)
router.get('/categorylist', getAllCategory)
router.param('categoryid', CategoryById)
router.get('/singlecategory/:categoryid', getsingleCategory)
router.delete('/deletecategory/:categoryid', deleteCategory)
router.put('/updatecategory/:categoryid', updateCategory)

module.exports = router