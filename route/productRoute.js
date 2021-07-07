const express = require('express')
const { postProduct, productList, ProductById, singleProduct, deleteProduct, updateProduct, listRelated, listBySearch, listSearch } = require('../controller/product')

const upload = require('../middleware/file-upload')
const { productValidation } = require('../validation')


const router = express.Router()


router.post('/postproduct', upload.single('product_image'), productValidation, postProduct)
router.get('/productlist', productList)
router.param('productId', ProductById)
router.get('/singleproduct/:productId', singleProduct)
router.delete('/deleteproduct/:productId', deleteProduct)
router.put('/updateproduct/:productId', updateProduct)
// router.get('/products/related/:productId', listRelated)
// router.post('/products/by/search', listBySearch)
// router.get('/products/search', listSearch)



module.exports = router
