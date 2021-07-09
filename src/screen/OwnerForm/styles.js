import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#424549',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    top: {
        backgroundColor: '#1e2124',
        borderBottomColor: '#23d206',
        borderBottomWidth: 1,
        flex: 2,
    },

    body: {
        padding: 40,
        paddingBottom: 10,
        flex: 28,
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        height: 40,
        marginVertical: 12,
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    multilineinput: {
        backgroundColor: 'white',
        color: 'black',
        //  height: 200,
        marginVertical: 12,
        borderBottomWidth: 1,
        borderRadius: 10,
    },
    buttonLower: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#23d206',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonTextNormal: {
        fontSize: 16,
        color: "white",
    },
})

export default styles