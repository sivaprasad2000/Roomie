import { StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    root: {
        width: Dimensions.get('window').width,
        height: '100%',
        backgroundColor: '#424549',
        alignItems: 'center',
    },
    scrollWrapper: {
        width: deviceWidth,
    }, 
    carouselContainer: {
        width: deviceWidth,
        height: 290,
    },
    image: {
        width: deviceWidth,
        resizeMode: 'cover',
        height: 250,
    },
    dotsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
    },
    detailsContainer: {
        padding: 20,
    },
    headingText: {
        marginBottom: 10,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#d2d2d2',
        fontSize: 15,
    },
    subContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    basicDetail: {
        flex: 5,
    },
    ownerDetail: {
        marginBottom: 20,
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    buttonCover: {
        width: 45,
        height: 45,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 22.5,
    }
})

export default styles;
