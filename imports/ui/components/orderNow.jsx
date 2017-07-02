import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import GridListSingleLine from './GridListSingleLine';

export default class orderNow extends Component {

  state = {
    open: false,
    order: '',
  };

  handleToggle = () => this.setState({open: !this.state.open});

  getClick = () => console.log("hello click");


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
            <Link to="/">
              <MenuItem>Close</MenuItem>
            </Link>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </MuiThemeProvider>

        {/*<img src="https://lorempixel.com/400/400/food/1" alt="food"*/}
             {/*onClick={this.getClick}*/}
        {/*/>*/}

        <GridListSingleLine someTitle="hello from order now"/>

      </div>
    );
  }
}