/**
 * Lobby.js
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';

import {
  modeColor
} from '../../theme/Colors';

//  import Constants from 'expo-constants';
//  import { StatusBar } from "expo-status-bar";

import LockPinHeader from '../LockPinHeader';
import LockPinMenuBar from '../LockPinMenuBar';

const Lobby = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? modeColor.dark.background : modeColor.light.background,
    flex: 1
  };
  LockPinHeader(isDarkMode);

  return (
    <SafeAreaView style={backgroundStyle}>
      <LockPinHeader isDarkMode={{ isDarkMode }}></LockPinHeader>

      <ScrollView
        pagingEnabled
        showsVerticalScrollIndicator={false}
      >
        
      </ScrollView>

      <LockPinMenuBar isDarkMode={{ isDarkMode }}></LockPinMenuBar>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  
});

export default Lobby;