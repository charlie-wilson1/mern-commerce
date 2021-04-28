import asyncHandler from "express-async-handler"
import Order from "../models/orderModel.js"

/**
 * @desc    create new order
 * @route   POST /api/orders
 * @access  Private
 */
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    OrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body

  if (OrderItems && OrderItems.length === 0) {
    res.status(400)
    throw new Error("No Order Items")
    return
  } else {
    const order = new Order({
      OrderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

export { addOrderItems }
