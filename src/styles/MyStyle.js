import { StyleSheet } from 'react-native';
import MyTheme from './MyTheme';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: MyTheme.colors.background,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: MyTheme.fonts.robotoBold,
        color: MyTheme.colors.primary,
    },
    input: {
        marginBottom: 30,
    },

    perfil: {
        alignItems: 'center',
    },
    info: {
        marginTop: 70,
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewDelete: {
        marginTop: 100,
        width: '90%',
        alignItems: 'center'
    },
    logoDetails: {
        width: 140,
        height: 140,
        borderRadius: 90,
    },
    textSmall: {
        fontSize: 14,
        fontFamily: MyTheme.fonts.robotoRegular,
        color: MyTheme.colors.gray,
    },
    textRegular: {
        fontSize: 20,
        margin: 20,
        fontFamily: MyTheme.fonts.robotoRegular,
        color: MyTheme.colors.gray,
        textAlign: 'center',
    },
    titleInfo: {
        fontSize: 22,
        fontFamily: MyTheme.fonts.robotoRegular,
    },
    infoCount: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textCount: {
        fontSize: 25,
        fontFamily: MyTheme.fonts.robotoBold,
        color: MyTheme.colors.black,
    },
    btnDelete: {
        height: 50,
        width: 200,
        borderRadius: 15,
        backgroundColor: MyTheme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtDelete: {
        fontSize: 20,
        color: '#FFF'
    },
});