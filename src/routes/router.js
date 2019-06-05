import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../containers/HomeScreen/HomeScreen';
import ContactScreen from '../containers/ContactScreen/ContactScreen';
import ProjectScreen from '../containers/ProjectScreen/ProjectScreen';
import WishesScreen from '../containers/WishesScreen/WishesScreen';
import UpToDateScreen from '../containers/UpToDateScreen/UpToDateScreen';
import SurveyScreen from '../containers/SurveyScreen/SurveyScreen';
import PharmacyScreen from '../containers/PharmacyScreen/PharmacyScreen';
import GumusovaScreen from '../containers/GumusovaScreen/GumusovaScreen';
import CorporateScreen from '../containers/CorporateScreen/CorporateScreen';
import GovermentScreen from '../containers/GovermentScreen/GovermentScreen';
import CameraScreen from '../containers/CameraScreen/CameraScreen';
import GoogleMapsScreen from '../containers/GoogleMapsScreen/GoogleMapsScreen';
import CalendarScreen from '../containers/CalendarScreen/CalendarScreen';



const appStack = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    ContactScreen: {
        screen: ContactScreen
    },
    ProjectScreen: {
        screen: ProjectScreen
    },
    WishesScreen:{
        screen: WishesScreen
    },
    UpToDateScreen:{
        screen: UpToDateScreen
    },
    SurveyScreen:{
        screen: SurveyScreen
    },
    PharmacyScreen:{
        screen: PharmacyScreen
    },
    GumusovaScreen:{
        screen: GumusovaScreen
    },
    CorporateScreen:{
        screen: CorporateScreen
    },
    GovermentScreen:{
        screen: GovermentScreen
    },
    CameraScreen:{
        screen: CameraScreen
    },
    GoogleMapsScreen:{
        screen: GoogleMapsScreen
    },
    CalendarScreen:{
        screen: CalendarScreen
    },

})


const AppRouter = createAppContainer(appStack);

export default AppRouter;