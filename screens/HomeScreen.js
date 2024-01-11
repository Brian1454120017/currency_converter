// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.contentContainer}>
    <View style={styles.logoContainer}>
        {/* <Image source={require('/snappetTest/assets/logo-w.png')} style={styles.logo} /> */}
        <Text style={styles.appName}>ZMWconvert</Text>
        <Text style={styles.info}>
        This app allows you to convert Zambian Kwacha to different currencies.
      </Text>
    </View>
    <Text style={styles.appFooter}>Powered by Flamintouch Technologies</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  appName: {
    fontSize: 50,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
  info: {
    color: '#FFFFFF',
  },

  appFooter: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: 'thin',
    color: '#FFFFFF',
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Center both logo and text horizontally
  },

  logo: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    marginBottom: 10, // Add some space between logo and text
  },
});

export default HomeScreen;




