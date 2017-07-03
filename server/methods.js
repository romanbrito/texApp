import {Meteor} from 'meteor/meteor';
import { Orders, Carts } from '../imports/api/orders';

Meteor.methods({

  'cart.insert'(cart) {

    // Make sure the user is logged in before inserting a task
    // if (! Meteor.userId()) {
    //   throw new Meteor.Error('not-authorized');
    // }

    Carts.insert(cart);

  },

});