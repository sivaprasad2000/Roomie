import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#1e2124',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    upper: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontFamily: 'PrincessSofia-Regular',
        fontSize: 80,
        color: '#7289da'
    },
    lower: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonUpper: {
        backgroundColor: '#424549',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#9aff03',
        borderWidth: 1,
    },
    buttonLower: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#424549',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#9aff03',
        borderWidth: 1,
    },
    buttonTextNormal: {
        fontFamily: 'Righteous-Regular',
        fontSize: 16,
        color: '#fff',
    },
    buttonTextCursive: {
        marginLeft: 10,
        fontFamily: 'PrincessSofia-Regular',
        fontSize: 18,
        color: '#7289da',
    }
})

export default styles