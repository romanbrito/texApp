import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// helps with mobile touch
injectTapEventPlugin();

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(

    <Router>
      <App />
    </Router>

    , document.getElementById('render-target'));
});
