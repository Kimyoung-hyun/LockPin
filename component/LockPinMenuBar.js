//LockPin 하단 메뉴바
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import {
    modeColor
  } from '../theme/Colors';

import Icon from 'react-native-vector-icons/FontAwesome';

const LockPinMenuBar = ({ isDarkMode }) => {
    const contentColor = isDarkMode ? modeColor.dark.contents : modeColor.light.contents;
    const styles = StyleSheet.create({
        container: {
            flex: 0.06,
            border: true,
            alignContent: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            borderStyle: 'solid',
            borderTopWidth: 1,
            borderTopColor: contentColor,
            paddingTop: 10,
        },
        btnContainer: {
            width: "100%",
            alignItems: 'center',
        },
        font: {
            fontSize: 18,
            color: contentColor,
            paddingTop: 5,
        },
    });

    Icon.loadFont();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {alert('PressSearch')}}>
                <View style={styles.btnContainer}>
                    <Icon name="search" size={20} color={ contentColor }/>
                    <Text style={styles.font}>Search</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <Icon name="home" size={20} color={ contentColor }/>
                    <Text style={styles.font}>Home</Text>
                </View>
            
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <Icon name="exclamation-circle" size={20} color={ contentColor }/>
                    <Text style={styles.font}>My Lock</Text>
                </View>
            </TouchableOpacity>
            
            

        </View>
    );
};




export default LockPinMenuBar;
