import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

import {
    modeColor
} from '../../theme/Colors';

const SearchSort = ({ isDarkMode }) => {
    const fontColor = isDarkMode ? modeColor.dark.font : modeColor.light.font;
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput>
                    
                </TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    search: {
        backgroundColor: 'green',
        

    },

});
 

export default SearchSort;
