import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo'
import RoomCard from '../../components/roomCard'

import rooms from '../../data/roomsForRent'

const RoomListScreen = () => {

    const roomListRender = ({ item }) => {
        <RoomCard room={item} />
    };

    return (
        <View style={styles.root}>
            <FlatList contentContainerStyle={styles.roomListInnerContainer} style={styles.roomList} data={rooms} renderItem={({ item }) => <RoomCard room={item} />} showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default RoomListScreen
