import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { Orders } from '../../api/orders';

class OrderDrawer extends Component {

  state = {
    open: false,
    currentCartID: '',
  };

  handleToggle = () =>{
    // this.setState({open: !this.state.open});

    if (!this.state.open) {

    let cart = {
      // user: Meteor.userId(),
      products: [],
    };

    Meteor.call('cart.insert', cart, (error, result) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("cartId " + result);

        this.setState(
          {
            open: true,
            currentCartID: result,
          });
      }
    });
    }

  };

  handleClose = () => this.setState({open: false});

  renderOrder() {
    return this.props.items.map((item) => (
      <MenuItem key={item._id}>{item.item}</MenuItem>
    ));
  }

  componentWillReceiveProps(nextProps) {
    Meteor.call('cart.update', this.state.currentCartID, nextProps.order, (error) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("cart updated ");
      }
    })

  }

  render() {
    return (
      <div>

        {console.log('drawer ' + this.props.items)}
        {console.log('drawer ' + this.props.order)}

        <MuiThemeProvider>
          <RaisedButton
            label="New Order"
            onTouchTap={this.handleToggle}
          />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Drawer
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
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

export default createContainer (() => {
  // subscribe api after removing autopublish
  return {
    items: Orders.find({}).fetch(),
  }
}, OrderDrawer);