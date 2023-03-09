/**
 * Bottom Tab Navigation
 */

import React from 'react';
import {observer} from 'mobx-react-lite';
import {HEADER_NONE, TAB_OPTIONS} from '@/Navigators/screenOptions';
import AgentRouteScreen from '@/Containers/SalesAgentRoutes/List';
import ScreenTitles from '@/Constants/screenTitles';
import {Icon} from '@/Components/Icon';
import AdmissionsScreen from '@/Containers/Admissions/List';
import EttnScreen from '@/Containers/Ettn/List';
import OrdersScreen from '@/Containers/Orders/List';
import SettingsScreen from '@/Containers/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/Navigators/types';
import {isAgent, isChief, isForwarder} from '@/Lib/getUserRole';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const TabNavigator = observer(() => {
  const {bottom} = useSafeAreaInsets();

  // @ts-ignore
  return (
    <BottomTab.Navigator
      id={'SUPPLIER_TAB_NAVIGATOR'}
      screenOptions={{...TAB_OPTIONS, tabBarStyle: {height: bottom + 65}}}>
      {(isAgent() || isChief()) && (
        <>
          <BottomTab.Screen
            name={'Routes'}
            // @ts-ignore
            component={AgentRouteScreen}
            options={{
              ...HEADER_NONE,
              tabBarLabel: ScreenTitles.agent.list,
              tabBarAccessibilityLabel: ScreenTitles.agent.list,
              tabBarIcon: ({color}) => <Icon icon={'route'} color={color} />,
            }}
          />
          <BottomTab.Screen
            name={'Orders'}
            // @ts-ignore
            component={OrdersScreen}
            options={{
              ...HEADER_NONE,
              tabBarLabel: ScreenTitles.order.list,
              tabBarAccessibilityLabel: ScreenTitles.order.list,
              tabBarIcon: ({color}) => <Icon icon={'order'} color={color} />,
            }}
          />
        </>
      )}
      {(isForwarder() || isChief()) && (
        <>
          <BottomTab.Screen
            name={'Admissions'}
            // @ts-ignore
            component={AdmissionsScreen}
            options={{
              ...HEADER_NONE,
              tabBarLabel: ScreenTitles.admissions.list,
              tabBarAccessibilityLabel: ScreenTitles.admissions.list,
              tabBarIcon: ({color}) => (
                <Icon icon={'admission'} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name={'Ettn'}
            // @ts-ignore
            component={EttnScreen}
            options={{
              ...HEADER_NONE,
              tabBarLabel: ScreenTitles.ettn.list,
              tabBarAccessibilityLabel: ScreenTitles.ettn.list,
              tabBarIcon: ({color}) => <Icon icon={'ettn'} color={color} />,
            }}
          />
        </>
      )}
      <BottomTab.Screen
        name={'Settings'}
        // @ts-ignore
        component={SettingsScreen}
        options={{
          ...HEADER_NONE,
          tabBarLabel: ScreenTitles.settings.main,
          tabBarAccessibilityLabel: ScreenTitles.settings.main,
          tabBarIcon: ({color}) => <Icon icon={'profile'} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
});

export default TabNavigator;
