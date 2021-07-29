import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import MyTheme from '../styles/MyTheme';
import { Ionicons } from '@expo/vector-icons';

export function ItemGit(props) {
    return (
        <View style={styles.container}>
            <View style={styles.txtImg}>
                <Image style={styles.avatar} source={{uri: props.avatar}} />
                <Text style={styles.nameUser}>{props.name}</Text>
            </View>
            <View></View>

            <View>
                <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                    <Ionicons name="ios-eye-outline" size={25} color={MyTheme.colors.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '90%',
        height: 50,
        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 7,
    },
    nameUser: {
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: MyTheme.fonts.robotoRegular,
    },
    btn: {
        padding: 15,
        marginRight: 5,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 90
    },
    txtImg: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    }
});