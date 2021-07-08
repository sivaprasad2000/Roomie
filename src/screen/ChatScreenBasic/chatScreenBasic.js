import React from 'react'
import { View, Text, TextInput, Image, STylesheet, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import styles from './styles'

const ChatScreenBasic = () => {
    return (
        <View style={styles.root}>
            <KeyboardAvoidingView behavior={"padding"} keyboardVerticalOffset={50} style={styles.upper}>
                <View style={styles.notch}>
                    <View style={styles.chatcredentials}>
                        <View style={styles.dp}>
                            <Image style={styles.dpimg} source={require('../../assets/chatscreenbasicdp.png')}></Image>
                        </View>
                        <View style={styles.chatname}>
                            <TouchableOpacity>
                                <Text style={styles.chatfont}>Kundan Menon</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.reflocationsbtnoverlay}>
                        <TouchableOpacity style={styles.reflocationsbtn}>
                            <Image style={styles.btnimg} source={require('../../assets/RefLocationsBtn.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.chatroom}>
                        <KeyboardAvoidingView behavior={"padding"} style={styles.chat}>
                            <ScrollView>
                            </ScrollView>
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView behavior={"padding"} style={styles.textboxoverlay}>
                                <TextInput multiline={true}
                                placeholder = "Type here"
                                textAlignVertical='top'
                                numberOfLines={2}
                                style={styles.textbox}
                                />
                                <View style={styles.sendbtnoverlay}>
                                    <TouchableOpacity>
                                        <Text style={styles.sendbtn}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={styles.lower}>
                <TouchableOpacity style={styles.findaplacebutton}>
                    <Text style={styles.buttonfont}>Find a Place</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreenBasic