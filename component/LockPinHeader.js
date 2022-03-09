//LockPin 헤더
import React from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const LockPinHeader = () => {
    Icon.loadFont();
    return (
        <View StyleSheet={styles.header}>
            <Icon name="location-pin" size={100} color="#900" />
        </View>
    );
};

const styles = StyleSheet.create({
  header: {
      marginTop: 200,
      margin: 200,

  }
});
 

export default LockPinHeader;
