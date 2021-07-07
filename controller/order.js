const OrderItem = require('../model/order-itemModel')
const Order = require('../model/orderModel')

exports.postOrderItem = (req, res) => {
    let newOrderItem = new OrderItem({
        quantity: req.body.quantity,
        product: req.body.product
    })

    newOrderItem.save((error, orderitem) => {
        if (error || !orderitem) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.json({ orderitem })
    })
}

exports.postOrder = async (req, res) => {
    const orderItems = req.body.orderItems

    //to calculate total price
    const totalPrices = await Promise.all(orderItems.map(async (orderItemId) => {
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'product_price')
        const total = orderItem.product.product_price * orderItem.quantity
        return (total)
    }))

    const totalPrice = totalPrices.reduce((a, b) => a + b, 0)

    let order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        city: req.body.city,
        phone_number: req.body.phone,
        zip: req.body.zip,
        status: req.body.status,
        country: req.body.country,
        user: req.body.user,
        totalPrice: totalPrice

    })

    await order.save((error, result) => {
        if (error || !result) {
            return res.status(400).json({ error: "Something went wrong" })
        }
        res.json({ result })
    })

}