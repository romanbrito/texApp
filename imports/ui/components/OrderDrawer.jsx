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
  };

  handleToggle = () =>{
    // this.setState({open: !this.state.open});

    if (!this.state.open) {

    let cart = {
      // user: Meteor.userId(),
      products: [],
    };

    Meteor.call('cart.insert', cart, (error) => {
      if (error) {
        console.log("error " + error.reason);
      } else {
        console.log("Task added");
      }
    });

      this.setState({open: true});

    }

  };

  handleClose = () => this.setState({open: false});

  renderOrder() {
    return this.props.items.map((item) => (
      <MenuItem key={item._id}>{item.item}</MenuItem>
    ));
  }

  componentWillReceiveProps(nextProps) {

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