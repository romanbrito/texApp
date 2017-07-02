import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import routes from './config/routes';
import RouteWithSubRoutes from './utils/RouteWithSubRoutes';

export default class App extends Component {

  render() {
    return (
      <div>

        <Link to="/orderNow">
          <h1>TexApp</h1>
        </Link>

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