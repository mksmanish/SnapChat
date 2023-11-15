import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/styles/colors';
import { moderateScale } from '../assets/styles/responsiveSize';

const BtnComp = ({
    btnText,
    onPress,
    btnStyle,
    textStyle,
    isDisable = false
}) => {

    return (
        <TouchableOpacity
            style={{ ...styles.btnStyle, ...btnStyle }}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isDisable}
        >
            <Text style={{...styles.textStyle, ...textStyle}}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.red,
        height: moderateScale(62),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize:moderateScale(24),
    }
});

export default BtnComp;