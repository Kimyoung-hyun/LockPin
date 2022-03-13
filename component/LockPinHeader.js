//LockPin 헤더
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import {
    modeColor
  } from '../theme/Colors';

import Icon from 'react-native-vector-icons/Entypo';

const LockPinHeader = ({ isDarkMode }) => {
    const fontColor = isDarkMode ? modeColor.dark.font : modeColor.light.font;
    Icon.loadFont();
    return (
        <View style={styles.container}>
            <Icon name="location-pin" size={25} color={fontColor}/>
            <Text style={{ fontSize: 25, color: fontColor }}>LockPin</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
    },

});
 

export default LockPinHeader;
