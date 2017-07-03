import OrderNow from '../components/OrderNow';
import MyRewards from '../components/MyRewards';
import Locations from '../components/Locations';
import Menu from '../components/Menu';

// route config
const routes = [
  {
    path: '/orderNow',
    component: OrderNow
  },
  {
    path: '/myRewards',
    component: MyRewards
  },
  {
    path: '/locations',
    component: Locations
  },
  {
    path: '/menu',
    component: Menu
  },
];

export default routes;
