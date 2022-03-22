//LockPin 헤더
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {
    modeColor
  } from '../theme/Colors';

import Icon from 'react-native-vector-icons/Entypo';

const LockPinHeader = ({ isDarkMode }) => {
    const fontColor = isDarkMode ? modeColor.dark.font : modeColor.light.font;
    const contentColor = isDarkMode ? modeColor.dark.contents : modeColor.light.contents;
    const fontSize = 25;

    Icon.loadFont();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="location-pin" size={fontSize} color={fontColor}/>
                <Text style={{ fontSize: fontSize, color: fontColor }}>LockPin</Text>
            </View>
            {/* TODO @hwjeon Add onClick EventHandler */}
            <TouchableOpacity> 
                <View style={styles.btnContainer}>
                    <Text 
                    style={{ fontSize: fontSize, 
                            color: contentColor, 
                            alignSelf:'flex-end', 
                            fontWeight:'600' }}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft: 10,
    },
    header: {
        flexDirection: 'row',
    },
    btnContainer: {
        width: "100%",
        paddingRight: 15,
    },
});

export default LockPinHeader;