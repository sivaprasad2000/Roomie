import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Matchuserlist = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headwrap}>
                <Text style={styles.welcomeText}>Matched users list</Text>
            </View>
        </View>
    );
}

export default Matchuserlist
