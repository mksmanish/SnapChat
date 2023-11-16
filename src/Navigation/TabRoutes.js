import React from 'react';
import { Image } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import {
    Map,
    Chat,
    Camera,
    Stories
} from '../Screens';
import { chat,map,camera,play,group,search } from '../assets';
import colors from '../assets/styles/colors';


const BottomTab = createBottomTabNavigator();


const TabRoutes = () => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.CHAT}
            screenOptions={{
                tabBarShowLabel: true,
                tabBarLabelStyle:{
                     fontSize: 12,
                     fontWeight:"bold",
                     color:"green"
                },
                tabBarStyle: {
                    height: 60,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: 'black',
                    borderTopWidth: 0,
                    borderTopRightRadius:15,
                    borderTopLeftRadius:15
                },
               
              }}
        >
             <BottomTab.Screen
                name={navigationStrings.CHAT}
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{tintColor: focused? colors.green: colors.white,width: 30, height: 30}} source={chat} />
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.MAP}
                component={Map}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{tintColor: focused? colors.green: colors.white,width: 30, height: 30}} source={map} />
                    }
                }}
            />
           
            <BottomTab.Screen
                name={navigationStrings.CAMERA}
                component={Camera}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{tintColor: focused? colors.green: colors.white,width: 30, height: 30}} source={camera} />
                    }
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.STORIES}
                component={Stories}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return <Image style={{tintColor: focused? colors.green: colors.white, width: 30, height: 30}} source={group} />
                    }
                }}
            />

        </BottomTab.Navigator>
    )
}

export default TabRoutes