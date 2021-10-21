import React from 'react';

import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors, parameters } from '../global/styles';

function Header({title, arrow, navigation}) {
    return (
        <View style = {styles.header}>
            <View style = {{marginLeft: 20}}>
                <Icon
                    type = "material-community"
                    name = {arrow}
                    color = {colors.headerText}
                    size = {28}
                    onPress = {() => {
                        navigation.navigate("SignInWelcomeScreen")
                        // or navigation.goBack()
                    }}
                />
            </View>
            <Text style = {styles.headerText}>{title}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header : {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        paddingTop: 10,

    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 80
    }
})

export default Header;
