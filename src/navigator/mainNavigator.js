import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile51468Navigator from '../features/UserProfile51468/navigator';
import Tutorial51467Navigator from '../features/Tutorial51467/navigator';
import NotificationList51439Navigator from '../features/NotificationList51439/navigator';
import Settings51438Navigator from '../features/Settings51438/navigator';
import Settings51430Navigator from '../features/Settings51430/navigator';
import UserProfile51428Navigator from '../features/UserProfile51428/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile51468: { screen: UserProfile51468Navigator },
Tutorial51467: { screen: Tutorial51467Navigator },
NotificationList51439: { screen: NotificationList51439Navigator },
Settings51438: { screen: Settings51438Navigator },
Settings51430: { screen: Settings51430Navigator },
UserProfile51428: { screen: UserProfile51428Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
