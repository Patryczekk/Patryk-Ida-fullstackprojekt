const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    date: Date,
    note: String
});

const Order = mongoose.model('Order', orderModel);

exports.newOrder = (date, note) => {
    var order = new Order({
        date: date,
        note: note
    })
    return order
}

exports.getAllOrders = () => {
    let orders = Order.find({})
    return orders
}