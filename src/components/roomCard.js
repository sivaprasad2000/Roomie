import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const RoomCard = (props) => {

    const room = props.room;

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{ uri: room.urls[0] }} />
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
        width: '100%',
        height: 300,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#b1b1b1',
    },
    image: {
        width: '100%',
        height: 170,
        resizeMode: 'cover',
        borderRadius: 10,
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
