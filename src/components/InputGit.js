import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { AntDesign } from '@expo/vector-icons';

export function InputGit(props) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputT} 
                placeholder={props.placeholder}
                placeholderTextColor={MyTheme.colors.gray2}
                onChangeText={props.onChangeText}
                value={props.value}
            />

            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                <AntDesign name="right" size={20} color={MyTheme.colors.gray2} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        width: '90%',
        height: 65,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
    },
    inputT: {
        flex: 1,
        height: '100%',
        backgroundColor: '#fff',
        paddingLeft: 20,
        color: MyTheme.colors.gray,
        fontFamily: MyTheme.fonts.robotoRegular,
        fontSize: 18,
    },
    btn: {
        padding: 15,
        borderLeftWidth: 1,
        borderLeftColor: MyTheme.colors.gray3,
    },
});