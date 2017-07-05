import {Meteor} from 'meteor/meteor';
import { Orders, Carts } from '../imports/api/orders';

Meteor.methods({

  'cart.insert'(cart) {

    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    // callback to get cartID
    return Carts.insert(cart);

  },

  'cart.update'(cartID, product) {

    Carts.update(cartID, {
      $set: { products: product}
    });
  }



});