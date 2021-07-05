import React from 'react'
import { View, Text, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native'

const RoleSelectionScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.upper}>
                <Text style={styles.logo}> Roomie </Text>
            </View>
            <View style={styles.lower}>
                <TouchableOpacity style={styles.buttonUpper}>
                    <Text style={styles.buttonTextNormal}>
                        Rent out a place
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLower}>
                    <Text style={styles.buttonTextNormal}>
                        Find a
                    </Text>
                    <Text style={styles.buttonTextCursive}>
                        Roomie
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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


export default RoleSelectionScreen
