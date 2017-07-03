import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Orders = new Mongo.Collection('orders');


// Schema

const OrderSchema = new SimpleSchema({
  item: {type: String},
});