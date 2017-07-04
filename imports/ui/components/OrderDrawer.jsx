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


  componentWillReceiveProps(nextProps) {
    // if (this.props !== nextProps) {
    //
    //
    // Meteor.call('cart.update', nextProps.cartID, nextProps.order, (error) => {
    //   if (error) {
    //     console.log("error " + error.reason);
    //   } else {
    //     console.log("cart updated ");
    //   }
    // })
    //
    // }

  }

  renderOrder() {
    if (this.props.items) {

      console.log('render Order props ' + this.props.items.products);

      return this.props.items.products.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
      ));

    }
  }

  render() {
    return (
      <div>

        {console.log('drawer items ' + this.props.items)}
        {console.log('drawer order ' + this.props.order)}

        <MuiThemeProvider>
          <Drawer
            open={this.props.openDrawer}
            // onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleClose}>Cancel</MenuItem>
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
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
  console.log("params " + cartID);
  return {
    items: Carts.findOne({_id: cartID}),
  }
}, OrderDrawer);