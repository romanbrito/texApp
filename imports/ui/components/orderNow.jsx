import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


export default class orderNow extends Component {

state = {
  open: false,
};

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <MuiThemeProvider>
        <RaisedButton
          label="New Order"
          onTouchTap={this.handleToggle}
        />
        </MuiThemeProvider>

        <MuiThemeProvider>
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        </MuiThemeProvider>

      </div>
    );
  }
}