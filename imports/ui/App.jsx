import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import routes from './config/routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col s6">
            <MuiThemeProvider>
              <Link to="/orderNow">
                <RaisedButton
                  label="Order Now"
                />
              </Link>
            </MuiThemeProvider>
          </div>

          <div className="col s6">
            <MuiThemeProvider>
              <Link to="/myRewards">
                <RaisedButton
                  label="My Rewards"
                />
              </Link>
            </MuiThemeProvider>
          </div>

        </div>

        <div className="row">

          <div className="col s6">
            <MuiThemeProvider>
              <Link to="/locations">
                <RaisedButton
                  label="Locations"
                />
              </Link>
            </MuiThemeProvider>
          </div>

          <div className="col s6">
            <MuiThemeProvider>
              <Link to="/menu">
                <RaisedButton
                  label="Menu"
                />
              </Link>
            </MuiThemeProvider>
          </div>

        </div>

        <div>

          {/* This code will dump the correct Child Component */}
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}

        </div>

      </div>

    );
  }
}