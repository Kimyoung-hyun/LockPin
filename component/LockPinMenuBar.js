//LockPin 하단 메뉴바
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

import Icon from 'react-native-vector-icons/FontAwesome';

const LockPinMenuBar = (isDarkMode) => {
    const fontColor = isDarkMode ? modeColor.dark.font : modeColor.light.font;
    const contentColor = isDarkMode ? modeColor.dark.font : modeColor.light.font;
    // const fontColor = '#463F3A';
    Icon.loadFont();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {alert('PressSearch')}}>
                <View style={styles.btnContainer}>
                    <Icon name="search" size={25} color="#BCB8B1"/>
                    <Text style={styles.font}>Search</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <Icon name="home" size={25} color="#BCB8B1"/>
                    <Text style={styles.font}>Home</Text>
                </View>
                
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <Icon name="exclamation-circle" size={25} color="#BCB8B1"/>
                    <Text style={styles.font}>My Lock</Text>
                </View>
            </TouchableOpacity>
            
            

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        border: true,
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: '#BCB8B1',
        paddingTop: 4,
    },
    btnContainer: {
        width: "100%",
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'orange',
    },
    font: {
        fontSize: 20,
        color: '#BCB8B1',
    },
});


export default LockPinMenuBar;
