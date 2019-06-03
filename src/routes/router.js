import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from '../containers/HomeScreen/HomeScreen';
import ContactScreen from '../containers/ContactScreen/ContactScreen';
import ProjectScreen from '../containers/ProjectScreen/ProjectScreen';



const appStack = createStackNavigator({
    HomeScreen:{
        screen:HomeScreen
    },
    ContactScreen:{
        screen:ContactScreen
    },
    ProjectScreen:{
screen:ProjectScreen
    }
})


const AppRouter= createAppContainer(appStack);

export default AppRouter;