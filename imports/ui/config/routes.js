import React from 'react';

import orderNow from '../components/orderNow';
import myRewards from '../components/myRewards';
import locations from '../components/locations';
import menu from '../components/menu';

// route config
const routes = [
  {
    path: '/orderNow',
    component: orderNow
  },
  {
    path: '/myRewards',
    component: myRewards
  },
  {
    path: '/locations',
    component: locations
  },
  {
    path: '/menu',
    component: menu
  },
];

export default routes;
