import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'
import Swiper from 'react-native-swiper' 

import { colors, parameters, createAccount} from '../../global/styles';


function SignInWelcomeScreen({navigation}) {
    return (
        // container view
        <View style = {{flex: 1}}>

            {/* description text */}
            <View style = {styles.restaurantTextDesc}>
                <Text style = {styles.restaurantTextStyle}>DISCOVER RESTAURANTS</Text>
                <Text style = {styles.restaurantTextStyle}>IN YOUR AREA</Text>
            </View>

            {/* image slide */}
            <View style = {{flex: 4, justifyContent: 'center'}}>
                <Swiper>
                    <View style = {styles.slide1}>
                    <Image 
                        source = {{uri: 'https://unsplash.com/photos/jpkfc5_d-DI/download?force=true&w=640'} }
                        style = {{width: '100%', height: '100%'}}
                        />
                    </View>
                    <View style = {styles.slide2}>
                    <Image 
                        source = {{uri: 'https://unsplash.com/photos/IGfIGP5ONV0/download?force=true&w=640'} }
                        style = {{width: '100%', height: '100%'}}
                        />
                    </View>
                    <View style = {styles.slide3}>
                    <Image 
                        source = {{uri: 'https://unsplash.com/photos/Yr4n8O_3UPc/download?force=true&w=640'} }
                        style = {{width: '100%', height: '100%'}}
                        />
                    </View>
                </Swiper>
            </View>

            {/* SIGN IN BUTTON */}
            <View style = {{flex: 4}}>
                <View style = {{marginHorizontal: 20, marginTop: 100}}>
                    <Button
                    title = "SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {() => {
                        navigation.navigate("SignInScreen")
                    }}
                    />
                </View>

                {/* CREATE ACCOUNT BUTTON */}
                <View style = {{marginHorizontal: 20, marginTop: 20}}>
                    <Button
                    title = 'create your account'
                    buttonStyle = {styles.createAcconutBtn}
                    titleStyle = {styles.createAcconutBtnTitle}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    restaurantTextDesc: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    restaurantTextStyle: {
        fontSize: 26,
        color: colors.buttons,
        fontWeight: 'bold'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    createAcconutBtn: {
       backgroundColor: colors.white,
       alignContent: 'center',
       justifyContent: 'center',
       borderRadius: 8,
       borderWidth: 1,
       borderColor: colors.buttons,
       height: 40,
       paddingHorizontal: 20,
       height: 50
    },
    
    createAcconutBtnTitle: {
        alignItems: 'center',
        color: colors.grey1,
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    }
})

export default SignInWelcomeScreen;