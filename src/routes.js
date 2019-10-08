import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Main from '~/pages/Main';
import SendMoneyPage from '~/pages/SendMoneyPage';
import HistoryMoneyPage from '~/pages/HistoryMoneyPage';
import SendMoneyToUser from '~/pages/SendMoneyToUser';

const appNavigator = FluidNavigator({
  Main,
  SendMoneyPage,
  HistoryMoneyPage,
  SendMoneyToUser
}, {
  defaultNavigationOptions: {gesturesEnabled: true},
  mode: 'card'
});



const Routes = createAppContainer(appNavigator);

export default Routes;