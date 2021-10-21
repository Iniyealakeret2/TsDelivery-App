import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './authNavigation';


function RootNavigator(props) {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}

export default RootNavigator;