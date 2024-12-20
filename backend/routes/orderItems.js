const express = require('express')
const { OrderItem } = require('../models')
const router = express.Router()

//order id로 조회
router.get('/orders/:id', async (req, res) => {
  try {
    const orderId = req.params.id

    const orderItems = await OrderItem.findAll({
      where: { order_id: orderId },
    })
    res.json(orderItems)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

router.get('/:id', (req, res) => {})

router.post('/', (req, res) => {})

router.put('/:id', (req, res) => {})

router.delete('/:id', (req, res) => {})

module.exports = router
