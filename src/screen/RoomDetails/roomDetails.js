import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

import rooms from '../../data/roomsForRent'

const RoomDetails = () => {

    const deviceWidth = Dimensions.get('window').width;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const renderDots = ({nativeEvent}) => {
        setCurrentImageIndex(Math.round(nativeEvent.contentOffset.x/deviceWidth))
    }

    const carouselHandler = ({ item }) => ( <Image style={styles.image} source={{ uri:  item }} /> )

    return (
        <View style={styles.root}>
            <ScrollView style={styles.scrollWrapper}>
                <View style={styles.carouselContainer}>
                    <View style={styles.imagesContainer}>
                        <FlatList onScroll={renderDots} keyExtractor={(item, index) => index} showsHorizontalScrollIndicator={false} horizontal pagingEnabled data={rooms[0].urls} renderItem={carouselHandler} />
                    </View>
                    <View style={styles.dotsContainer}>
                        {rooms[0].urls.map((item, index) => <View key={index} style={[styles.dot, {backgroundColor: (currentImageIndex == index)?'white':'gray'}]} />)}
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.subContainer}>
                        <View style={styles.basicDetail}>
                            <Text style={styles.headingText}>
                                Bangalore, Karnataka
                            </Text>
                            <Text style={styles.normalText}>
                                Blah House, Kundan Street
                                Bangalore, Karnataka
                                50023
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonCover}>
                                <FontAwesome style={styles.button} name={'heart'} size={30} color={'red'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.ownerDetail}>
                        {"\t"} Owner : Kundan Menon {"\n"}
                        {"\t"} Contact: +919457348334
                    </Text>
                    <Text style={styles.headingText}>
                        3 BHK
                    </Text>
                    <Text style={styles.normalText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text style={[styles.headingText, { marginTop: 20 }]}>
                        ₹ 3000 /month
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default RoomDetails
