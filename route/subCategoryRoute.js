const express = require('express')
const { postSubCategory, subcategorylist, SubcategoryById, singlesubcategory, deleteSubCategory, updateSubCategory } = require('../controller/subcategory')

const router = express.Router()

router.post('/postsubcategory', postSubCategory)
router.get('/subcategorylist', subcategorylist)
router.param('subcategoryid', SubcategoryById)
router.get('/singlesubcategory/:subcategoryid', singlesubcategory)
router.delete('/deletesubcategory/:subcategoryid', deleteSubCategory)
router.put('/updatesubcategory/:subcategoryid', updateSubCategory)

module.exports = router