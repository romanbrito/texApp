import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Carts, Orders } from '../../api/orders';

class OrderDrawer extends Component {


  componentWillUpdate(nextProps) {

    //if (JSON.stringify(this.props.orderObj) !== JSON.stringify(nextProps.orderObj)) {


    Meteor.call('cart.update', this.props.cartID, this.props.orderObj, (error) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("cart updated ");
      }
    })

    //}

  }

  renderOrder() {
    if (this.props.items) {

      console.log('render Order props ' + JSON.stringify(this.props.items.products));

      return this.props.items.products.map((item) => (
        <MenuItem key={item.name}>{item.name} x {item.Q} @ {item.price}</MenuItem>
      ));

    }
  }

  render() {
    return (
      <div>

        <MuiThemeProvider>
          <Drawer
            open={this.props.openDrawer}
            // onRequestChange={(open) => this.setState({open})}
          >
            <Link to="/">
            <MenuItem>Cancel</MenuItem>
            </Link>
            <MenuItem># of Items {this.props.quantity}</MenuItem>
            {this.renderOrder()}
          </Drawer>
        </MuiThemeProvider>

      </div>
    );
  }
}

// get cart products from mongodb
export default OrderDrawerContainer = createContainer (({ cartID }) => {
  // subscribe api after removing autopublish
  // console.log("params " + cartID);
  return {
    items: Carts.findOne({_id: cartID}),
  }
}, OrderDrawer);