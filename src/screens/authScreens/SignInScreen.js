import React, {useState, useRef} from 'react';

import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
// here you can import icons and the rest
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'

import { colors, parameters, title, createAccount} from '../../global/styles';
import Header from '../../components/Header';

function SignInScreen({navigation}) {

    const[textInput2Focused, setTextInput2Focused] = useState(false)
    const[textInput1Focused, setTextInput1Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style = {styles.container}>

            <Header title = "MY ACCOUNT" 
                    arrow = "arrow-left"
                    navigation = {navigation}
            />

            <View style = {{marginLeft: 30, marginTop: 10}}>
                <Text style = {title} >Sign-In</Text>
            </View>

            <View style = {{marginTop: 10, alignItems: "center"}}>
                <Text style = {styles.text1}>Please enter the email and password</Text>
                <Text style = {styles.text1}>registered with your account</Text>
            </View>

            <View>
                {/* email textInput one field */}
                <View style = {styles.textInput1}>

                     <Animatable.View animation = {textInput1Focused?"":"fadeInLeft"} duration = {400}>
                        <Icon
                            name = "email"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                        />
                    </Animatable.View>
                    <TextInput
                        style = {{width:"90%"}}
                        placeholder = "Email"
                        ref = {textInput2}

                        onFocus = { ()=>{
                            setTextInput1Focused(false)
                        } }

                        onBlur = { ()=>{
                            setTextInput1Focused(true)
                        } }
                    />
                    
                </View>

                {/* password textInput two field */}

                <View style = {styles.textInput2}>
                    {/* lock Icon */}
                    <Animatable.View animation = {textInput2Focused?"":"fadeInLeft"} duration = {400}>
                        <Icon
                            name = "lock"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                        />

                    </Animatable.View>

                    <TextInput
                        style = {{width: "80%"}}
                        placeholder = "Password"
                        ref = {textInput2}

                        onFocus = { ()=>{
                            setTextInput2Focused(false)
                        } }
                        onBlur = { ()=>{
                            setTextInput2Focused(true)
                        } }
                    />
                    <Animatable.View animation = {textInput2Focused?"":"fadeInRight"} duration = {400}>
                        <Icon
                            name = "visibility-off"
                            iconStyle = {{color:colors.grey3}}
                            type = "material"
                        />

                    </Animatable.View>
                </View>
            </View>
                {/* SIGN IN button  */}
                <View style = {{marginHorizontal: 20, marginVertical: 20}}>
                    <Button
                    title = "SIGN IN"
                    buttonStyle = {parameters.styledButton}
                    titleStyle = {parameters.buttonTitle}
                    onPress = {() =>{
                        navigation.navigate("HomeScreen")
                    }}
                    />
                </View>

                <View style = {{ alignItems: 'center', marginTop: 15}}>
                    <Text style = {{...styles.text1, textDecorationLine: "underline"}}>Forgot Password?</Text>
                </View>

                        {/* OR text */}
                <View style = {{alignItems:'center', marginTop: 30, marginBottom: 30}}>
                    <Text style = {{fontSize: 20, fontWeight:'bold'}}>OR</Text>
                </View>

                        {/* Facebook Button */}
                <View>
                    <SocialIcon
                        title = "Sign In With Facebook"
                        button
                        type = "facebook"
                        style = {styles.socialIcon}
                        onPress = {() => {}}
                    />
                </View>

                {/* Google Button */}

                <View style = {{marginVertical: 10}}>
                    <SocialIcon
                        title = "Sign In With Google"
                        button
                        type = 'google'
                        style = {styles.socialIcon}
                        onPress = { () => {}}
                    />
                </View>

                {/* new on TsDelivery */}
                <View style = {{marginLeft: 20, marginTop: 20}}>
                    <Text style = {{...styles.text1}}>New on TsDelivery?</Text>
                </View>

                {/* create an account */}
                <View style = {{alignItems: 'flex-end', marginHorizontal: 20, marginTop:20}}>
                    <Button
                    title = 'create an account'
                    buttonStyle = {createAccount.createAcconutBtn}
                    titleStyle = {createAccount.createAcconutBtnTitle}
                    />
                </View>

        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    textInput1: {
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 20,
        borderColor: colors.borderColors,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20,
        paddingLeft: 15,
        paddingBottom: 10,
        paddingTop: 10,
    },

    textInput2: {
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 20,
        paddingLeft: 15,
        borderColor: colors.borderColors,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignContent: "center",
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 15,
    },

    socialIcon: {
        borderRadius: 8,
        marginHorizontal: 20,
    }
})

export default SignInScreen;