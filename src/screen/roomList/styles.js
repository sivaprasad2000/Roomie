import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    roomList: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: '90%',
    }
})

export default styles;
