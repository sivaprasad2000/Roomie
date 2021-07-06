import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const cardWidth = Dimensions.get('window').width*0.9;

const RoomCard = (props) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const renderDots = ({nativeEvent}) => {
        setCurrentImageIndex(Math.round(nativeEvent.contentOffset.x/cardWidth))
    }

    const room = props.room;

    const renderCarousel = ({ item }) => (
        <Image style={styles.image} source={{ uri: item }} />
    )

    return (
        <View style={styles.root}>
            <View style={{ width: cardWidth, height: 170 }}>
                <FlatList onScroll={renderDots} pagingEnabled horizontal data={room.urls} keyExtractor={(item, index) => index} renderItem={renderCarousel} />
            </View>
            <View style={styles.dotContainer}>
                {room.urls.map((item, index) => <View key={index} style={[styles.dot, { backgroundColor: (currentImageIndex == index)?'gray':'white' }]} />)}
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.cardDetailsLeft}>
                    <Text style={styles.location}>
                        {room.location}, {room.state}
                    </Text>
                    <Text style={styles.address} numberOfLines={2}>
                        {room.address}
                    </Text>
                    <Text style={styles.rent}>
                        ₹ {room.rent}/month
                    </Text>
                </View>
                <View style={styles.cardDetailsRight}>
                    <View style={styles.noOfUsersContainer}>
                        <FontAwesome name={'user'} size={25} color={'#000'} />
                        <Text style={styles.noOfUsers}> {room.noPeople} </Text>
                    </View>
                    <View style={styles.favoriteButtonContainer}>
                        <TouchableOpacity style={styles.favoriteButton}>
                            <FontAwesome name={'heart'} size={30} color={'red'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: cardWidth,
        height: 330,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#b1b1b1',
    },
    image: {
        width: cardWidth,
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    dotContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        marginHorizontal: 5,
    },
    detailsContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: 10,
    },
    cardDetailsLeft: {
        flexDirection: 'column',
        height: 130,
        padding: 10,
        flex: 5,
        borderRadius: 10,
    },
    cardDetailsRight: {
        flexDirection: 'column',
        height: 130,
        padding: 10,
        flex: 4,
        borderRadius: 10,
    },
    location: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    address: {
        fontSize: 14,
        marginVertical: 10,
    },
    rent: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    noOfUsersContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    favoriteButtonContainer: {
        paddingRight: 10,
        paddingBottom: 10,
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    noOfUsers: {
        paddingRight: 10,
        marginLeft: 5,
        fontSize: 17,
        fontWeight: 'bold'
    }
})


export default RoomCard
