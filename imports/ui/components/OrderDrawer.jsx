import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class OrderDrawer extends Component {

  state = {
    open: false,
  };

  handleToggle = () => this.setState({open: !this.state.open});

  renderOrder() {
    let order = this.props.items;
    return <MenuItem>{order}</MenuItem>
  }

  render() {
    return (
      <div>

        {console.log('from grid ' + this.props.items)}

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
            <MenuItem>Menu Item 1</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
            {this.renderOrder()}
          </Drawer>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default OrderDrawer;