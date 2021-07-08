import { View, Text, TextInput, StyleSheet, Dimensions, Image, Pressable, TouchableOpacity, Button, StatusBar, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'



const styles = StyleSheet.create({
    root: {
        backgroundColor: '#424549',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    upper: {
        flex: 31,
    },
    notch: {
        backgroundColor:'#1e2124',
        borderBottomColor: '#9aff03',
        borderBottomWidth: 1,
        flex:3,
        flexDirection: 'row',
    },
    chatroom: {
        flex:28,
    },
    lower: {
        backgroundColor: '#424549',
        flex:4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    findaplacebutton: {
        flexDirection: 'row',
        backgroundColor: '#9aff03',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonfont: {
        fontFamily: 'Righteous-Regular',
        fontSize: 16,
    },
    chat: {
        flex: 17,
        marginBottom: 30,
    },
    textboxoverlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textbox: {
        marginLeft: 10,
        flex: 11,
        flexDirection: 'row',
        backgroundColor:'#fff',
        borderRadius: 10,
        height: 40,
        marginBottom: 12,
    },
    sendbtnoverlay: {
        flex:2,
        borderWidth:1,
        borderColor: '#9aff03',
        marginRight: 5,
        marginLeft:5,
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:12,
        borderRadius:20,
        backgroundColor: '#1e2124',
    },
    sendbtn: {
        color:'#fff',
    },
    chatcredentials: {
        flex:4,
        flexDirection: 'row',
    },
    reflocationsbtnoverlay: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    reflocationsbtn: {
        borderRadius: 20,
        borderWidth:1,
        borderColor: '#9aff03',
        backgroundColor: '#1e2124',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#424549',
        height: 40,
        width: 40,
    },
    btnimg: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    dpimg: {
        width: 40,
        height: 40,
        borderColor: '#f55b14',
        borderWidth: 2,
        borderRadius: 20,
    },
    dp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    chatname: {
        flex:4,
        justifyContent: 'center',
    },
    chatfont: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default styles