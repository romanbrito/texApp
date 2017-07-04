import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Orders = new Mongo.Collection('orders');
export const Carts = new Mongo.Collection('carts');


// Schema

// const CartSchema = new SimpleSchema({
//   products: {type: Array},
// });
//
// Carts.attachSchema(CartSchema);
//
// const OrderSchema = new SimpleSchema({
//   item: {type: String},
//   owner: {type: String},
//   cartId: {type: String},
// });
//
// Orders.attachSchema(OrderSchema);