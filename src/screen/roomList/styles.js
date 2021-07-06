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
        width: Dimensions.get('window').width*0.9,
    }
})

export default styles;
