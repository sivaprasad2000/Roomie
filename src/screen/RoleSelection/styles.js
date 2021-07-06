import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native'


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#011e26',
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
        color: '#fff'
    },
    lower: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonUpper: {
        backgroundColor: '#fff',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonLower: {
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonTextNormal: {
        fontFamily: 'Righteous-Regular',
        fontSize: 16,
    },
    buttonTextCursive: {
        marginLeft: 10,
        fontFamily: 'PrincessSofia-Regular',
        fontSize: 18,
    }
})

export default styles